let string = "adhgmas";

const isIsogram = str => {
  if (str.length === 0) {
    return true;
  }
  let i = 0;
  let arrayString = str
    .toLowerCase()
    .split("")
    .sort();
  arrayString.forEach((element, index) => {
    if (arrayString[index] === arrayString[index + 1]) {
      return i++;
    }
  });
  if (i === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isIsogram(string));
