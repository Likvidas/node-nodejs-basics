import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const resultData = new Transform({
    transform(chank, encoding, callback) {
      callback(null, chank.toString().split('').reverse().join(''));
      process.exit(1);
    },
  });

  stdin(resultData).pipe(stdout);
};

await transform();
