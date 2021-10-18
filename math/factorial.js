export default function factorialize(num) {
  if (num < 0) {
    throw new Error(`Expected positive number but got ${num}.`);
  }

  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return num;
}

console.log(factorialize(4));
