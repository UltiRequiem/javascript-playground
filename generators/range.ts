export function* range(start: number, end?: number, step?: number) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === undefined) {
    step = 1;
  }

  for (let i = start; i < end; i += step) {
    yield i;
  }
}

for (const number of range(2, 10, 3)) {
  console.log(number);
}
