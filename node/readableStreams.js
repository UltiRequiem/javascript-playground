import { Readable } from "node:stream";
import process from "node:process";

const rs = new Readable();

rs.push("hello");
rs.push("world");

rs.push(null); // tells the consumer that rs is done outputting data

rs.pipe(process.stdout);
