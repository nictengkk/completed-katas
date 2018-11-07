//input: string
//output: string alphabet that does not repeat

let string = "MoonnM";

const firstNonRepeatingLetter = str => {
  let array1 = str.toLowerCase().split("");
  let array = str.split("");
  for (let i = 0; i < array1.length; i++) {
    let el = array1[i];
    if (array1.indexOf(el) === array1.lastIndexOf(el)) {
      return array[i];
    }
  }
  return "";
};

console.log(firstNonRepeatingLetter(string));
