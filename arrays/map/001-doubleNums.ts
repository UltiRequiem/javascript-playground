import { NUMBERS } from "../data.ts";

const doubleNumbers = (arr: number[]) => arr.map((n) => n * 2);

console.log(doubleNumbers(NUMBERS));
