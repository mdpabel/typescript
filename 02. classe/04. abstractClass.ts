abstract class Employee {
  constructor(protected _name: string) {}

  abstract getSalary(): number;

  getInfo(): void {
    console.log('name  :' + this._name);
  }
}

class Engineer extends Employee {
  constructor(_name: string, private salary: number) {
    super(_name);
  }

  getSalary(): number {
    return this.salary;
  }
}

const pabel = new Engineer('MD Pabel', 0);

pabel.getInfo();
console.log(pabel.getSalary());
