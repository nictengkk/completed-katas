// input: string of words
// output: length of shortest word(s)
// create an array of elements, iterate through the elements to get an array of element.length, sort the array to return the zero-indexed result.

let string = "lets talk about javascript the best language";

const findShort = s => {
  let array = s.split(" ");
  let newArray = array
    .map(element => {
      return element.length;
    })
    .sort((a, b) => {
      return a - b;
    });
  return newArray[0];
};

console.log(findShort(string));
