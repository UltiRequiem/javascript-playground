import { NUMBERS } from "../data.ts";

// deno-lint-ignore no-explicit-any
export default function delItem(arr: any[], toDel: any) {
  return arr
    .slice(0, arr.indexOf(toDel))
    .concat(arr.slice(arr.indexOf(toDel) + 1, arr.length));
}

console.log(delItem(NUMBERS, 50));
