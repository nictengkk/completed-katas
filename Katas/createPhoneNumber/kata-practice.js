// input: array of integers
// output: a string of numbers - (123) 456-7890

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const createPhoneNum = arr => {
  let string = arr.slice(0, 3).join("");
  let string2 = arr.slice(3, 6).join("");
  let string3 = arr.slice(6).join("");

  return `(${string})` + " " + string2 + "-" + string3;
};

console.log(createPhoneNum(array));
