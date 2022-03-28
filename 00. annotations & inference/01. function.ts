const add = (a: number, b: number): number => {
  return a + b;
};

function sub(a: number, b: number): number {
  return a - b;
}

const mul = function (a: number, b: number): number {
  return a * b;
};

// type inference
const div = (a: number, b: number) => {
  return a / b;
};

const logger = function (str: string): void {
  console.log(str);
};

const err = (str: string): never => {
  throw new Error(str);
};

console.log(add(2, 3));

err('Something went wrong');
