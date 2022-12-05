import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stat, rm } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const checkOfExistence = (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);

const remove = async () => {
  try {
    const targetPath = join(__dirname, 'files/fileToRemove.txt');
    const hasFileExists = await checkOfExistence(targetPath);

    if (!hasFileExists) {
      throw new Error('FS operation failed');
    }

    await rm(targetPath);
  } catch (error) {
    console.error(error);
  }
};

await remove();
