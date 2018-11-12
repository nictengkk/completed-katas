//input string
//output boolean
// take a string to check if all characters are unique.

let string = "abcdef";
let string2 = "abccdef";

const hasUniqueChars = str => {
  let array = str.split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
};

console.log(hasUniqueChars(string));
