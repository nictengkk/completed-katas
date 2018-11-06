// input: string
// output: boolean
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

let string = "XxOoo";

const xoChecker = str => {
  let arrayString = str.toLowerCase().split("");
  let arrayOfX = arrayString.filter(element => {
    return element === "x";
  });
  let arrayOfO = arrayString.filter(element => {
    return element === "o";
  });
  if (arrayOfX.length === arrayOfO.length) {
    return true;
  } else {
    return false;
  }
};
console.log(xoChecker(string));
