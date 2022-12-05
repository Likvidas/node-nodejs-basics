import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stat, readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const checkOfExistence = (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);

const read = async () => {
  try {
    const targetPath = join(__dirname, 'files/fileToRead.txt');
    const hasFileExists = await checkOfExistence(targetPath);

    if (!hasFileExists) {
      throw new Error('FS operation failed');
    }

    const result = await readFile(targetPath, 'utf-8');

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

await read();
