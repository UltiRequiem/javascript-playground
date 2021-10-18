function modeTwo(arr: number[]) {
  arr = arr.sort(
    (a, b) =>
      arr.reduce((acu, cur) => (cur === a ? (acu += 1) : cur)) -
      arr.reduce((acu, cur) => (cur === b ? (acu += 1) : cur)),
  );

  return arr.pop();
}

function modeOne(arr: number[]) {
  arr = arr.sort(
    (a, b) =>
      arr.filter((v) => v === a).length - arr.filter((v) => v === b).length,
  );

  return arr.pop();
}

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

console.log(modeTwo(NUMBERS));
console.log(modeOne(NUMBERS));
