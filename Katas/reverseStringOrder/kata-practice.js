let string = "I live in Serangoon Central";
let stringg = "i love to shit";

function spinWords(str) {
  let array = str.split(" ");
  let newArray = array.map(element => {
    if (element.length >= 5) {
      return element
        .split("")
        .reverse()
        .join("");
    } else {
      return element;
    }
  });
  return newArray.join(" ");
}

console.log(spinWords(stringg));
