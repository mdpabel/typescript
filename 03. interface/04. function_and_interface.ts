interface AddFunc {
  (a: number, b: number): number;
}

const add: AddFunc = (a: number, b: number): number => {
  return a + b;
};

add(2, 3);
