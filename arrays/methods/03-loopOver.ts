import { FRUITS } from "../data.ts";

// deno-lint-ignore no-explicit-any
const printItems = (arr: any[]) => {
  arr.forEach((elem, index) => console.log(elem, index));
};

printItems(FRUITS);
