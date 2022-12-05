import { argv } from 'process';

const parseArgs = () => {
  const args = argv.slice(2);
  let result = '';

  args.forEach((argument) => {
    if (argument.includes('--')) {
      result += argument.replace('--', '');
    } else {
      result += ` is ${argument}, `;
    }
  });
  console.log(result);
};

parseArgs();
