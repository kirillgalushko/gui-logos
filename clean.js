import path from 'path';
import { smartRename } from 'smart-rename';

const patternsToRemove = [
  /-svgrepo-com/g,
  /-logo/g,
  /-color/g,
  /-icon/g,
  /_\- logo/g,
  /\d{2,}x\d{2,}/g,
  /\(.*?\)/g,
];

const clean = async () => {
  try {
    const logosDir = path.resolve('./assets/logo');
    await smartRename(logosDir, {
      patternsToRemove,
      formatCounter: (filename, counter) => {
        return `${filename}-${counter}`
      },
      transform: (filename) => {
        return filename.toLowerCase();
      },
      removeSpaces: true,
    })
    console.log('Processing complete!');
  } catch (err) {
    console.error('Error processing directory:', err);
  }
}

clean();
