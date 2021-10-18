import { NUMBERS } from "../data.ts";

function rmOdds(arr: number[]) {
  return arr.filter((num) => num % 2 === 0);
}

console.log(rmOdds(NUMBERS));

export default rmOdds;
