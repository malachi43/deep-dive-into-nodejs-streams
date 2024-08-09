//NOTE: All streams are async iterable.
const { createReadStream } = require("fs")
const stream = createReadStream("./async-iterable.js", { encoding: "base64" });



async function consume(streams) {
    //see streams as being async-iterable.
    for await (const chunk of streams) {
        console.log(`CHUNK:\n`, chunk)
    }
}


function wait(time) {
    for (let i = 0; i < time; ++i) {
        console.log
    }
}

//using generators as async-iterables.
async function* generate() {
    yield "hello\n";
    wait(10_000_000);
    yield "World\n";
    wait(10_000_000);
    yield 'welcome\n';
    wait(10_000_000);
    yield 'to\n';
    wait(10_000_000);
    yield 'nodejs\n'
}

//add method to String prototype.
String.prototype.capitalize = function () {
    const N = this.length;
    let newStr = this[0].toUpperCase();
    for (let i = 1; i < N; ++i) {
        newStr += this[i].toLowerCase();
    }
    return newStr;
}

async function readAsync(iterator) {
    //we invoke the generator function so we can iterate over it.
    for await (const chunk of iterator()) {
        console.log(chunk.capitalize())
    }
}


function print() {
    readAsync(generate);
}


print();
consume(stream);
