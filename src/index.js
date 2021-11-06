import RoundImage from './round';
import readline from 'readline';

const rl = readline.createInterface(({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  }))

rl.question(
    "Which file would you like to round? ",
    (filename) => RoundImage(
        filename, 
        (info) => console.log('File created')
    )
);
