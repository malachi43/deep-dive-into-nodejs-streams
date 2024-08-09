import { EventEmitter} from "events";

class MyEvent extends EventEmitter { }

const myEvent = new MyEvent();

function print(msg) {
    console.log(`received: `, msg)
}

myEvent.on("ping", print);

myEvent.emit("ping", "pong")
