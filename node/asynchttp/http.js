import http from "node:http";

import { INITIAL_PORT } from "./config.js";

function initializeServer(port) {
  const server = http.createServer((_request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    console.log(`The microservice ${port} get a request.`);
    response.end(JSON.stringify({ port, message: "Hello World!" }));
  });

  server.listen(port);
}

for (let i = INITIAL_PORT; i < INITIAL_PORT + 11; i++) {
  initializeServer(i);
}
