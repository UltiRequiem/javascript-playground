import { NUMBERS } from "../data.ts";

// deno-lint-ignore no-explicit-any
const sumAll = (arr: any[]) => arr.reduce((acum, cur) => acum + cur);

console.log(sumAll(NUMBERS));
