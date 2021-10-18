import { FRUITS } from "../data.ts";

// deno-lint-ignore no-explicit-any
const lastElement = (arr: any[]) => arr[arr.length - 1];

console.log(lastElement(FRUITS));
