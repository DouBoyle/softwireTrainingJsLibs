import sharp from 'sharp';

const width = 400
const r = width / 2
const circleShape = Buffer.from(
    `<svg><circle cx="${r}" cy="${r}" r="${r}" /></svg>`
);

export default function RoundImage(imagejpg) {
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