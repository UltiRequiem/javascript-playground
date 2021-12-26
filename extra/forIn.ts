interface LooseObject<T> {
  [key: string]: T;
}

const me: LooseObject<any> = { name: "Eliaz", age: 15 };

for (const prop in me) {
  console.log(me[prop]);
}

// console.log(Object.values(me))
// console.log(Object.keys(me))
