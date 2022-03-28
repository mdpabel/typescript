interface named {
  name: string;
}

interface Aged {
  age: number;
}

interface Log extends named, Aged {
  print(): void;
}

const obj: Log = {
  name: 'MD Pabel',
  age: 23,
  print(): void {
    console.log(this.name);
  },
};
