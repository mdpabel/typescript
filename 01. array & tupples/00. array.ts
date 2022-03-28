const nums: number[] = []; // annotation

// nums.push('a');

const nums2 = [1, 2, 3]; // inference

// nums2.push('a');

const matrix: number[][] = []; // annotation

// matrix.push([1, 2, '3']);

const matrix2 = [
  [1, 2],
  [3, 4],
]; // inference

const arr: (number | string)[] = [];
arr.push(1);
arr.push('a');
// arr.push(new Date());

nums2.map((num: number): number => {
  return num;
});
