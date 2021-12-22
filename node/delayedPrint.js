import { Readable } from "node:stream";
import process from "node:process";

let c = 97 - 1;

const zCharCode = "z".charCodeAt(0);

const rs = new Readable({
  read() {
    if (c >= zCharCode) {
      this.push("\n");
      return this.push(null);
    }

    setTimeout(function () {
      rs.push(String.fromCharCode(++c));
    }, 100);
  },
});

rs.pipe(process.stdout);

process.on("exit", () => {
  console.error(`_read() called  ${c - 97} times`);
});

process.stdout.on("error", process.exit);
