// input: array of odd or even integers with an exception N
// output: return number N
//

let array = [21, 45, 67, 33, 5, 25, 28];
let array2 = [24, 66, 56, 20, 78, 16, 5, 34];
let array3 = [1, 2, 3];

const findOutlier = arr => {
  let newArray = arr.filter(element => element % 2 !== 0);
  if (newArray.length >= 2) {
    let newArr = arr.filter(element => element % 2 === 0);
    return parseInt(newArr.toString());
  } else {
    return parseInt(newArray.toString());
  }
};

console.log(findOutlier(array3));
