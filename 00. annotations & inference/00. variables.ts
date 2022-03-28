let full_name: string = 'MD Pabel';
let id: number = 111111;
let isTrue: boolean = false;

let arr: number[] = [1, 2, 3, 4];
let obj: { x: number; y: number } = {
  x: 1,
  y: 2,
};

const logSomething: (v: number) => void = (val: number | string) => {
  console.log(val);
};

// when to use annotations
// 1. Function that returns the 'any' type

const db_res = '{"x" : 1, "y" : 2}';

const response: { x: number; y: number } = JSON.parse(db_res);

// 2. when we declare a variable on one line then initialize it later
const nums = [1, 2, 3, 4];
let isExist: boolean;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    isExist = true;
  }
}

// 3. when we want a variable to have a type that can't be inferred
