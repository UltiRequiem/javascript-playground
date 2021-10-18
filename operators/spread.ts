function sum(...numbers: number[]): number {
  return numbers.reduce((acum, curr) => acum + curr);
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
