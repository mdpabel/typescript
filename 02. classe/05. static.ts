class Maths {
  static PI = 3.14;

  static add(...nums: number[]): number {
    return nums.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  }

  static sub(a: number, b: number): number {
    return a - b;
  }
}

console.log(Maths.add(2, 3, 4, 5, 6, 10));
