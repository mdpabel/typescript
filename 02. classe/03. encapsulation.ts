class User {
  constructor(private _name: string) {}

  public get name() {
    return this._name;
  }

  public set name(name) {
    this._name = name;
  }
}

const user = new User('MD');

user.name = 'Updated';

console.log(user.name);
