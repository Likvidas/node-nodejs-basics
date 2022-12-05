import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  try {
    const sourcePath = join(__dirname, 'files/fileToCompress.txt');
    const archivePath = join(__dirname, 'files/archive.gz');

    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(archivePath);

    source.pipe(gzip).pipe(destination);
  } catch (error) {
    console.error(error);
  }
};

await compress();
