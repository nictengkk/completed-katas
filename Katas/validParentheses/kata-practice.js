// 5kyu

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// resources: using reduce to count instances of elements
// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
// https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array

const validParentheses = parens => {
  const arr = parens.split("");
  const hash = arr.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  if (arr.slice(-1).pop() === "(") {
    return false;
  }
  return hash["("] === hash[")"] ? true : false;
};

console.log(validParentheses("(())((()())())"));
