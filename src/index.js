import sharp from 'sharp';
const width = 400,
    r = width / 2,
    circleShape = Buffer.from(`<svg><circle cx="${r}" cy="${r}" r="${r}" /></svg>`);

sharp('input.jpg')
    .resize(width, width)
    .composite([{
        input: circleShape,
        blend: 'dest-in'
    }])
    .webp()
    .toFile('output.jpg', (err, info) => err ?
        console.error(err.message) :
        console.log(info)
    );