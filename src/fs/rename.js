import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stat, rename as fsRename } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const checkOfExistence = (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);

const rename = async () => {
  const sourceFile = join(__dirname, 'files/wrongFilename.txt');
  const resultFile = join(__dirname, 'files/properFilename.md');

  try {
    const hasSourceFile = await checkOfExistence(sourceFile);
    const hasResultFile = await checkOfExistence(resultFile);

    const isError = !hasSourceFile || hasResultFile;

    if (isError) {
      throw new Error('FS operation failed');
    }

    await fsRename(sourceFile, resultFile);
  } catch (error) {
    console.error(error);
  }
};

await rename();
