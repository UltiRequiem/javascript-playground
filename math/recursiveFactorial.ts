function factorialize(num: number): number {
  if (num < 0) {
    throw new Error(`Expected positive number but got ${num}.`);
  }

  return num === 0 || num === 1 ? 1 : num * factorialize(num - 1);
}

console.log(factorialize(4));
