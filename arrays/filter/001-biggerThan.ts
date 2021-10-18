import { NUMBERS } from "../data.ts";

function biggerThan(arr: number[], max: number) {
  return arr.filter((num) => num > max);
}

console.log(biggerThan(NUMBERS, 70));

export default biggerThan;
