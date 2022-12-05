import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stat, writeFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const checkOfExistence = (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);

const create = async () => {
  const targetPath = join(__dirname, 'files/fresh.txt');
  const TEXT = 'I am fresh and young';
  const ERROR_MESSAGE = 'FS operation failed';

  try {
    const hasFileExists = await checkOfExistence(targetPath);
    if (hasFileExists) {
      throw new Error(ERROR_MESSAGE);
    }
    await writeFile(targetPath, TEXT);
  } catch (error) {
    console.error(error);
  }
};

await create();
