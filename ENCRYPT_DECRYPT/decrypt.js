const { Transform, pipeline } = require('stream');
const fs = require('fs');

const read = fs.createReadStream('./encrypt.txt')
const write = fs.createWriteStream('./decrypt.txt');

const decrypt = new Transform()
decrypt._transform = (chunk, encoding, callback) => {
    for (let i = 0; i < chunk.length; ++i) {
        if (chunk[i] <= 255) {
            chunk[i] = chunk[i] - 1
        }
    }
    decrypt.push(chunk)
    callback();
}

pipeline(read, decrypt, write, err => {
    if (err) console.error(`Error: ${err.message}`)
    console.log(`file decrypted successfully.`)
})