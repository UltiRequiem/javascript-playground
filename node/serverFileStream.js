import http from "http";
import fs from "fs";

import { dirname } from "./utils.js";

const server = http.createServer((_req, res) => {
  fs.createReadStream(`${dirname(import.meta)}/data.json`).pipe(res);
});

server.listen(8000);
