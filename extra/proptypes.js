// export default function Person(first, last) {
//   this.first = first;
//   this.last = last;
// }
//
// Person.prototype.fullName = function () {
//   return `${this.first} ${this.last}`;
// };
//
// Person.prototype.fullNameReversed = function () {
//   return `${this.last}, ${this.first}`;
// };

export default class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  fullName() {
    return `${this.first} ${this.last}`;
  }

  fullNameReversed() {
    return `${this.last}, ${this.first}`;
  }
}

const simon = new Person("Simon", "Wilson");

console.log(simon);
console.log(simon.fullName());
