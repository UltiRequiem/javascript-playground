export default class Animal {
  public name: string;
  public speed: number;

  constructor(name: string) {
    this.speed = 0;
    this.name = name;
  }

  run(speed: number) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

export class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

const genericAnimal = new Animal("My animal");
const rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.hide();

genericAnimal.run(7);
genericAnimal.stop();
