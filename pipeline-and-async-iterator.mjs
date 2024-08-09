import { pipeline } from "stream";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)

pipeline(
    createReadStream(__filename),
    //remember streams are async-iterables. so you can await on them. (you can use generator function to carry out streams tranform).
    async function* toUpper(source) {
        //the "source" arg is a read-stream.
        for await (const chunk of source) {
            let data = chunk.toString().toUpperCase();
               console.log(data);
            yield data;
        }
    },
    process.stdout,
    err => {
        if (err) console.log(`Error processing pipeline: `, err);
        else console.log(`pipeline succeeded.`)
    }
)
