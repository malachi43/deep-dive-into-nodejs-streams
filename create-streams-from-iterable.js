const { Readable } = require("stream");

const names = ["malachi", "chibuike", "chinemerem", "sarah", "florence", "ibanga"]
const set = new Set(["malachi", "chibuike", "chinemerem", "sarah", "florence", "ibanga"])
const map = new Map([["name", "malachi"], ["date", new Date().toISOString()]])

const stream = Readable.from(names)


async function streaming(streamInterface) {
    console.log(`streaming...`)
    for await (let chunk of streamInterface) {
        console.log(chunk)
    }
    console.log(`streaming finished.`)
}

streaming(stream);

//creating a stream from an iterable.
Readable.from(names).on("data", chunk => console.log(`chunk returned: `, chunk.toString().split(",").join(" --> ")));
