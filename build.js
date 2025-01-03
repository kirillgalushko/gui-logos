import fs from 'fs';
import path from 'path';
import recursiveReaddir from 'recursive-readdir';
import { optimize } from 'svgo';

function toPascalCase(string) {
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), ' ')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

function clearDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

function readAndOptimizeSVG(file) {
  const fileName = path.basename(file, '.svg');
  const svgContent = fs.readFileSync(file, 'utf-8');
  return optimize(svgContent, {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            removeUnknownsAndDefaults: false,
            convertShapeToPath: false,
            collapseGroups: false,
            removeUselessDefs: false,
          },
        },
      },
      {
        name: 'removeComments',
      },
      { name: 'cleanupIds',
        params: {
          overrides: {
            remove: false,
            minify: false,
          },
        },
      },
      {
        name: 'prefixIds',
        params: {
          delim: '-gui-asset-',
          prefix: fileName,
          prefixIds: true,
          prefixClassNames: true
        },
      },
    ],
  });
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function createVueComponent(file, optimizedSvg, outputSubDir) {
  const fileName = path.basename(file, '.svg');
  const variant = path.basename(outputSubDir)
  const fileNameWithPostfix = `${variant}-${fileName}`
  const pascalCaseFileName = toPascalCase(fileNameWithPostfix);
  const modifiedSvg = optimizedSvg.replace(
    /<svg([^>]*?)>/,
    `<svg$1 :style="computedStyles">`
  );

  const vueFileContent = `
<script lang="ts" setup>
import { computed } from 'vue';

interface ${pascalCaseFileName}Props {
  width?: string;
  height?: string;
}

const props = defineProps<${pascalCaseFileName}Props>();

const computedStyles = computed(() => ({
  width: props.width || '1em',
  height: props.height || '1em',
  minWidth: props.width || '1em',
  minHeight: props.height || '1em',
}));
</script>

<template>
  ${modifiedSvg}
</template>
  `;
  const vueFilePath = path.join(outputSubDir, `${pascalCaseFileName}.vue`);
  fs.writeFileSync(vueFilePath, vueFileContent);
  console.log(`Component for ${fileName}.svg created at ${vueFilePath}`);
  return { vueFilePath, pascalCaseFileName };
}

function updateIndexFile(outputSubDir, pascalCaseFileName) {
  const indexFilePath = path.join(outputSubDir, 'index.ts');
  const exportStatement = `export { default as ${pascalCaseFileName} } from './${pascalCaseFileName}.vue';\n`;
  if (fs.existsSync(indexFilePath)) {
    fs.appendFileSync(indexFilePath, exportStatement);
  } else {
    fs.writeFileSync(indexFilePath, exportStatement);
  }
}

function generateBuildIndex(outputDir) {
  const allDirs = fs.readdirSync(outputDir, { withFileTypes: true }).filter(item => item.isDirectory()).map(dir => dir.name);
  const buildIndexPath = path.join(outputDir, 'index.ts');
  let buildIndexContent = '';
  allDirs.forEach(dir => {
    buildIndexContent += `export * from './${dir}';\n`;
  });
  fs.writeFileSync(buildIndexPath, buildIndexContent);
  console.log('Generated build/index.ts with re-exports for all components.');
}

async function generateVueComponents(inputDir, outputDir) {
  try {
    clearDirectory(outputDir);
    ensureDirectoryExists(outputDir);
    const svgFiles = await recursiveReaddir(inputDir, ['!*.svg']);
    for (const file of svgFiles) {
      const { data: optimizedSvg } = readAndOptimizeSVG(file);
      const relativePath = path.relative(inputDir, path.dirname(file));
      const outputSubDir = path.join(outputDir, relativePath);
      ensureDirectoryExists(outputSubDir);
      const { pascalCaseFileName } = createVueComponent(file, optimizedSvg, outputSubDir);
      updateIndexFile(outputSubDir, pascalCaseFileName);
    }
    generateBuildIndex(outputDir);
  } catch (error) {
    console.error('Error while generating Vue components:', error);
  }
}

const inputDirectory = './assets';
const outputDirectory = './build';

generateVueComponents(inputDirectory, outputDirectory);
