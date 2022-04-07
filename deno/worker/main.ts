function worker() {
  const { href } = new URL("./worker.ts", import.meta.url);
  return new Worker(href, { type: "module" });
}

const workersPool = Array.from({ length: 10 }).map(worker);

const url = "https://deno.land/manual/runtime/workers";

for (let i = 0; i < 10; i++) {
  for (const [index, worker] of workersPool.entries()) {
    worker.postMessage({ url, time: `Round ${i}, number ${index}.` });
  }
}

for (const worker of workersPool) {
  worker.terminate();
}
