const { Transform, pipeline } = require('stream');
const fs = require('fs');

const read = fs.createReadStream('./text.txt')
const write = fs.createWriteStream('./encrypt.txt')


const encrypt = new Transform()
encrypt._transform = (chunk, encoding, callback) => {
    for (let i = 0; i < chunk.length; ++i) {
        if (chunk[i] < 255) {
            chunk[i] = chunk[i] + 1;
        }
    }
    encrypt.push(chunk)
    callback();
}

pipeline(read, encrypt, write, err => {
    if (err) console.error(`Error: ${err.message}`)
    console.log(`file encrypted successfully.`)
})