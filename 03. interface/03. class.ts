interface PersonInterface {
  readonly name: string;
  age?: number;
  print(): void;
}

class Person implements PersonInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  print(): void {}
}

class Student extends Person {}

const s = new Person('A');
s.name = 'JHel';
