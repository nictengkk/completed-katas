// input: string
// output: fraction as a string
// if string contains alphabets a to m, no error, return 0/string.length.
// if string contains alphabets from n to z, returns no.of alphabets/string.length.

let stringError = "aaaxbbbbyyhwawiwjjjwwm";
let stringPerfect = "aaabbbbhaijjjm";

const printerError = str => {
  let sortedArray = str.split("");
  let arrayNoError = sortedArray.filter(
    element =>
      element === "a" ||
      element === "b" ||
      element === "c" ||
      element === "d" ||
      element === "e" ||
      element === "f" ||
      element === "g" ||
      element === "h" ||
      element === "i" ||
      element === "j" ||
      element === "k" ||
      element === "l" ||
      element === "m"
  );
  let arrayWithError = sortedArray.filter(element => {
    return (
      element === "n" ||
      element === "o" ||
      element === "p" ||
      element === "q" ||
      element === "r" ||
      element === "s" ||
      element === "t" ||
      element === "u" ||
      element === "v" ||
      element === "w" ||
      element === "x" ||
      element === "y" ||
      element === "z"
    );
  });
  if (arrayWithError.length === 0) {
    return "0/" + `${sortedArray.length}`;
  } else {
    return `${arrayWithError.length}` + "/" + `${sortedArray.length}`;
  }
};

console.log(printerError(stringError));

//using regex

const printerError = str => {
  let regexp = /[A-M]/gi;
  let regexe = /[N-Z]/gi;
  let errorString = str.match(regexe);
  let perfectString = str.match(regexp);
  if (perfectString.length === str.length) {
    return "0/" + `${str.length}`;
  } else {
    return `${errorString.length}` + "/" + `${str.length}`;
  }
};

console.log(printerError(stringError));
