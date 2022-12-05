import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';
import { createWriteStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const targetPath = join(__dirname, 'files/fileToWrite.txt');

  const stream = createWriteStream(targetPath);

  stdin.pipe(stream);
};

await write();
