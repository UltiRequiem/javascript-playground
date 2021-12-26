import { Readable } from "node:stream";

let c = 97;

const rs = new Readable({
  read() {
    this.push(String.fromCharCode(c++));
    if (c > 122) {
      this.push("\n") && this.push(null);
    }
  },
});

rs.pipe(process.stdout);
