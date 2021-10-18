const Human = ({ name, age }: { name: string; age: number }) => ({
  name,
  age,
  sayHi: () => console.log(`Hi, my name is ${name}.`),
});

const zero = Human({ name: "Eliaz", age: 14 });

zero.sayHi();
console.log(zero.name);
console.log(zero.age);

class HumanTwo {
  public name: string;
  public age: number;

  constructor({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

const astroboy = new HumanTwo({ name: "Astro Boy", age: 18 });

astroboy.sayHi();

console.log(astroboy.name);
console.log(astroboy.age);
