import fs from 'fs';
import path from 'path';

const blacklist = [
  /-svgrepo-com/g,
  /-logo/g,
  /-color/g,
  /-icon/g,
  /_\- logo/g,
  /\d{2,}x\d{2,}/g,
  /\(.*?\)/g,
];

function cleanFilename(filename) {
  const baseName = path.basename(filename, path.extname(filename));
  let cleanedName = baseName.toLowerCase();

  blacklist.forEach((regex) => {
    cleanedName = cleanedName.replace(regex, '');
  });

  return cleanedName.replace(/[-_\s]+/g, '-').replace(/^-+|-+$/g, '');
}

function getUniqueFilename(uniqNamesSet, baseName, ext) {
  let uniqueName = baseName;
  let counter = 2;

  while (uniqNamesSet.has(uniqueName + ext)) {
    uniqueName = `${baseName}-${counter}`;
    counter++;
  }

  return `${uniqueName}${ext}`;
}

const sortEntries = (entries) => {
  return entries.sort((a, b) => {
    const nameA = path.parse(a.name).name.toLowerCase();
    const nameB = path.parse(b.name).name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const sortedEntries = sortEntries(entries);
  console.log(sortedEntries.map(entry => entry.name));

  const uniqNamesSet = new Set();
  const folderRenameMap = new Map();

  sortedEntries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      const cleanedName = cleanFilename(entry.name);
      const ext = path.extname(entry.name);
      const uniqueName = getUniqueFilename(uniqNamesSet, cleanedName, ext);
      uniqNamesSet.add(uniqueName);
      folderRenameMap.set(entry.name, uniqueName);
      if (entry.name !== uniqueName) {
        const newFullPath = path.join(dir, uniqueName);
        fs.renameSync(fullPath, newFullPath);
      }
    }
  });

  return folderRenameMap;
}

const startDir = path.resolve('./assets/logo');

try {
  const folderRenameMap = processDirectory(startDir);
  console.log('Processing complete!');
  console.log(`Processed ${folderRenameMap.size} files.`);
} catch (err) {
  console.error('Error processing directory:', err);
}
