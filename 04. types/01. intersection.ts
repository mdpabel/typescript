interface People {
  name: string;
  age?: number;
}

interface Id {
  id: number;
}

interface Address {
  address: object;
}

type Student = People & Id;
type OrderInfo = People & Address;

const student: Student = {
  name: 'MD Pabel',
  age: 23,
  id: 11,
};

const orderInfo: OrderInfo = {
  name: 'MD Pabel',
  address: {},
};
