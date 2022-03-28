class Person {
  //   private name: string;
  //   private id: number;

  private classmates: string[] = [];

  constructor(private name: string, protected readonly id: number) {
    // this.name = name;
    // this.id = id;
  }

  introduceSelf(this: Person): void {
    console.log("I'm " + this.name + `- ${this.id}`);
  }

  add(classmate: string): void {
    // this.id = 1;
    this.classmates.push(classmate);
  }

  print(): void {
    console.log(this.classmates);
  }
}

const person = new Person('MD Pabel', 11);
person.introduceSelf();

person.add('A');
person.add('B');

person.print();

// const personCopy = { introduceSelf: person.introduceSelf };
// personCopy.introduceSelf();
