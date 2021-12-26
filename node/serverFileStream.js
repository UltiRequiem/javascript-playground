import http from "http";
import fs from "fs";

import { dirname } from "./utils.js";

const server = http.createServer((_request, response) => {
  fs.createReadStream(`${dirname(import.meta)}/data.json`).pipe(response);
});

server.listen(8000);
