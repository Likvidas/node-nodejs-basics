import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { copyFile, mkdir, readdir, stat } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const checkOfExistence = (path) =>
  stat(path)
    .then(() => true)
    .catch(() => false);

const copy = async () => {
  try {
    const sourcePath = join(__dirname, 'files');
    const destinationPath = join(__dirname, 'files_copy');
    const hasSourceDirectory = await checkOfExistence(sourcePath);
    const hasDestinationDirectory = await checkOfExistence(destinationPath);
    const isError = !hasSourceDirectory || hasDestinationDirectory;

    if (isError) {
      throw new Error('FS operation failed');
    }

    const files = await readdir(sourcePath);
    await mkdir(destinationPath);
    for (const file of files) {
      await copyFile(join(sourcePath, file), join(destinationPath, file));
    }
  } catch (error) {
    console.error(error);
  }
};

copy();
