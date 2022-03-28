interface A {
  a1: string;
  a2: string;
}

interface B {
  b1: string;
  b2: string;
}

type C = A | B;
type D = A & B;

const obj: C = {
  a1: '',
  a2: '',
  b1: '',
  b2: '',
};

const obj2: D = {
  a1: '',
  a2: '',
  b1: '',
  b2: '',
};
