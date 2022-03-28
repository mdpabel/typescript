class Department {
  protected employees: string[] = [];

  constructor(private readonly id: number, public name: string) {}

  add(name: string): void {
    this.employees.push(name);
  }

  printInfo(): void {
    console.log(
      ` employees ${this.employees} - dept name ${this.name} - dept id ${this.id} `
    );
  }
}

class IT extends Department {
  constructor(id: number, protected admins: string[]) {
    super(id, 'IT');
  }
  showAdmins(): void {
    console.log(this.admins);
  }
  add(name: string) {
    this.employees = [...this.employees, ...this.admins, name];
  }
}

const it = new IT(12, ['A', 'B']);
it.add('MD');
it.printInfo();
