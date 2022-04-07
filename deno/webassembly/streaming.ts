const module = await WebAssembly.compileStreaming(
  fetch("https://wpt.live/wasm/incrementer.wasm"),
);

const instance = await WebAssembly.instantiate(module);

const increment = instance.exports.increment as (input: number) => number;

console.log(increment(5));
