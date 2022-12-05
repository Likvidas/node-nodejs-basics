import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  try {
    const targetPath = join(__dirname, 'files/fileToCalculateHashFor.txt');
    const data = await readFile(targetPath, 'utf-8');
    const hash = createHash('SHA256').update(data).digest('hex');
    console.log(hash);
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
