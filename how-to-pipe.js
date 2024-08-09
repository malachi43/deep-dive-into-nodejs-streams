//NOTE: use "pipeline" instead of "pipe". Error handling in "pipe" is difficult.
const { pipeline, Transform } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const writeStream = createWriteStream('transform_upper.txt')
const upper = new Transform()
//implement the "_transform" method.
upper._transform = function (chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
}

pipeline(
    createReadStream(__filename),
    upper,
    writeStream,
    err => {
        if (err) console.log(`error processing pipeline`);
        else console.log(`pipeline succeeded.`)
    })