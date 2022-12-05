import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  try {
    const archivePath = join(__dirname, 'files/archive.gz');
    const targetPath = join(__dirname, 'files/fileToCompress.txt');

    const gunzip = createGunzip();
    const source = createReadStream(archivePath);
    const destination = createWriteStream(targetPath);

    source.pipe(gunzip).pipe(destination);
  } catch (error) {
    console.error(error);
  }
};

await decompress();
