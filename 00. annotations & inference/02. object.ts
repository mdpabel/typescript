const person = {
  full_name: 'MD Pabel',
  age: 23,
  coords: {
    lt: 0,
    lng: 14,
  },
  update({ val }: { val: number }): void {
    this.age = val;
  },
};

person.update({ val: 24 });

const {
  full_name,
  age,
  coords: { lt, lng },
}: {
  full_name: string;
  age: number;
  coords: { lt: number; lng: number };
} = person;

console.log(full_name, age, lt, lng);
