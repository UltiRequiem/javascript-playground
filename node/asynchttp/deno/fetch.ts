import { INITIAL_PORT } from "../config.js";

async function fetchByPort(port: number) {
  const response = await fetch(`http://localhost:${port}`)
  console.log(await response.json())
}

for (let i = INITIAL_PORT; i < INITIAL_PORT + 11; i++) {
  fetchByPort(i);
}
