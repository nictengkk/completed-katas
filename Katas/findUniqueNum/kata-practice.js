//input: array of numbers
//output: unique number within the array of numbers

let array = [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1];
let array2 = [0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const findUniq = arr => {
  let sortedArray = arr.sort();
  if (sortedArray[0] === sortedArray[1]) {
    return sortedArray.pop();
  } else {
    return sortedArray[0];
  }
};

console.log(findUniq(array2));
