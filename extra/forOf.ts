const hey = [1, 2, 3];

for (const [i, v] of hey.entries()) {
  console.log(v, i, hey);
}

hey.forEach(console.log);
