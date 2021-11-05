import sharp from 'sharp';
import readline from 'readline';

const rl = readline.createInterface(({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  }))

  rl.question("Which file would you like to round? ", RoundImage);

const width = 400,
    r = width / 2,
    circleShape = Buffer.from(`<svg><circle cx="${r}" cy="${r}" r="${r}" /></svg>`);

export function RoundImage(imagejpg) {
    return sharp(imagejpg)
    .resize(width, width)
    .composite([{
        input: circleShape,
        blend: 'dest-in'
    }])
    .webp()
    .toFile(`round-${imagejpg}`, (err, info) => err ?
        console.error(err.message) :
        console.log('File created')
    );
}