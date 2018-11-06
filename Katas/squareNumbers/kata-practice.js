// Input: Numbers
// Output: Boolean
// Task: Given an integral number, determine if it's a square number.

const isSquare = n => {
  if (n < 0) {
    return false;
  } else {
    let sqrtNumber = Math.sqrt(n);
    if (sqrtNumber - Math.round(sqrtNumber) !== 0) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(isSquare(9));
