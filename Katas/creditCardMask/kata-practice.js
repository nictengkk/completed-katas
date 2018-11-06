// input: string
// output: string
// if string has more than 4 characters, mask out all characters except the last 4 and replace them with "#"

let s = "abcdefghijklmnop";

const maskify = str => {
  if (str.length < 4) {
    return str;
  }
  let array = str.split("");
  let replacedArray = array.fill("#", 0, array.length - 4);
  return replacedArray.join("").toString();
};

console.log(maskify(s));
