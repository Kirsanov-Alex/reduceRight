const matrix = [
  [0, 1],
  [2, 3],
  [4, 5]
];

console.log(matrix.reduceRight((acum, curr) => acum.concat(curr)));

const myReduceRight = (arr, callback, startValue) => {
  let result = startValue || [];
  for (let i = arr.length -1; i >= 0; i--) {
    result = callback(result, arr[i], i, arr);
  }
  return result;
}
console.log(myReduceRight(matrix, (acum, curr) => acum.concat(curr)));