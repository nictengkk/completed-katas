//input: string
//output: string

let string = "ATCG";

function dnaComplement(dna) {
  let array = dna.split("");
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "A") {
      finalArray.push("T");
    } else if (array[i] === "T") {
      finalArray.push("A");
    } else if (array[i] === "C") {
      finalArray.push("G");
    } else {
      finalArray.push("C");
    }
  }
  return finalArray.join("");
}

console.log(dnaComplement(string));
