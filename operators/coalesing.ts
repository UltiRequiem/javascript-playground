function coalesing<T>(input?: T): T | string {
  return input ?? "Hello world";
}

console.log(coalesing());
console.log(coalesing(1));
console.log(coalesing(true));
