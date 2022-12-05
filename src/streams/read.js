import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';
import { createReadStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const targetPath = join(__dirname, 'files/fileToRead.txt');

  const stream = createReadStream(targetPath, 'utf-8');

  stream.on('data', (chank) => stdout.write(chank));
};

await read();
