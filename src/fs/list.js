import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readdir, stat } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const checkOfExistence = (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);

const list = async () => {
  try {
    const sourcePath = join(__dirname, 'files');
    const hasSourceDirectory = await checkOfExistence(sourcePath);

    if (!hasSourceDirectory) {
      throw new Error('FS operation failed');
    }

    const files = await readdir(sourcePath);

    console.log(files);
  } catch (error) {
    console.error(error);
  }
};

await list();
