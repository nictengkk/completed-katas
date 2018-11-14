let string = "I live in Serangoon Central";
let stringg = "i love to shit";

function spinWords(str) {
  let array = str.split(" ");
  //   let newArray = array.map(element => {
  //     if (element.length >= 5) {
  //       return element
  //         .split("")
  //         .reverse()
  //         .join("");
  //     } else {
  //       return element;
  //     }
  //   });
  //   return newArray.join(" ");
  // }

  let newArray = array.map(element => {
    return element.length >= 5
      ? element
          .split("")
          .reverse()
          .join("")
      : element;
  });

  return newArray.join(" ");
}

console.log(spinWords(string));
