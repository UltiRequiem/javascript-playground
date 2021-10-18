const incrementBy = (n) => (x) => n + x;

export default function main() {
  const incrementByOne = incrementBy(1); // => int -> int
  const eleven = incrementByOne(10);
  console.log(eleven); // => 11
}

main();
