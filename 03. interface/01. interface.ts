interface Person {
  readonly _name: string;
  readonly age: number;
  print(): void;
}

const person: Person = {
  _name: 'MD Pabel',
  age: 23,
  print() {
    console.log(this._name);
  },
};

// person.age = 24;

person.print();

// person._name = 'Hello';
