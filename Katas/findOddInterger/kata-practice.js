//input: array of numbers
//output: number
//find unique number that appears an odd number of times.

let array = [1, 2, 3, 4, 5, 5, 3, 3, 2, 1, 4];
let arrayy = [1, 2, 3, 4, 5, 5, 3, 1, 4];
let arrayyy = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1];

// let unique = new Set(array);
// console.log(unique);

const findOdd = A => {
  if (A.length === 1) {
    return Number(A.toString());
  }
  let sortedArray = A.sort();
  console.log(sortedArray);
  let oddInteger = sortedArray.filter((el, i, array) => {
    if (array.indexOf(el) === array.lastIndexOf(el)) {
      return el;
    }
  });
  console.log(oddInteger);
  return Number(oddInteger.toString());
};

console.log(findOdd(arrayy));

// const findOdd = A => {
//   if (A.length === 1) {
//     return Number(A.toString());
//   }
//   let sortedArray = A.sort();
//   let oddInteger = sortedArray.filter((el, i, array) => {
//     if (array[i] === array[i + 2]) {
//       return array[i];
//     }
//   });
//   return Number(oddInteger.toString());
// };
