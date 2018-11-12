//input: string
//output: boolean

let string = "abcabcabcabc";

const primeString = s => {
  if (s.length % 2 !== 0) {
    return true;
  }
  let stringA = s
    .split("")
    .slice(0, s.length / 2)
    .join("");
  let stringB = s
    .split("")
    .slice(s.length / 2, s.length)
    .join("");

  if (stringA === stringB) {
    return false;
  }
  return true;
};

console.log(primeString(string));
