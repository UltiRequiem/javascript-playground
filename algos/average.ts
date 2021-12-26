export default function average(...numbers: number[]): number {
  return numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
}

console.log(average(2, 3, 4, 5));
