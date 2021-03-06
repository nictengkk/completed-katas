let stringA = "eecoff";
let stringB = "coffee";

const shiftedDiff = (first, second) => {
  let count = 1;
  if (first === second) {
    return 0;
  }
  if (first.length !== second.length) {
    return -1;
  }
  if (first === " " && second === " ") {
    return 0;
  }

  let arrayA = first.split("");
  for (let i = 0; i < first.length; i++) {
    const toPutInFront = arrayA.pop();
    const remainderCharacters = arrayA.join("");
    const output = toPutInFront + remainderCharacters;
    if (output !== second) {
      count++;
      arrayA = output.split("");
    } else {
      return count;
    }
  }
  return -1;
};

console.log(shiftedDiff(stringA, stringB));
