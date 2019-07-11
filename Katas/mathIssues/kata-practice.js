// Oh no, our Math object was "accidently" reset.Can you re - implement some of those functions ? We can assure, that only non - negative numbers are passed as arguments.So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
  return number - parseInt(number) >= 0.5
    ? parseInt(number) + 1
    : parseInt(number);
};

Math.ceil = function(number) {
  return parseInt(number) === number ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};

// Math.round = function(inputNum) {
//   const arrayOfDigits = Array.from(String(inputNum));
//   const decimalPosition = arrayOfDigits.findIndex(el => el === ".");
//   const roundedNum = Number(arrayOfDigits.slice(0, decimalPosition).join(""));
//   return arrayOfDigits.length === 1
//     ? Number(arrayOfDigits[0])
//     : arrayOfDigits[decimalPosition + 1] < 5
//     ? roundedNum
//     : roundedNum + 1;
// };

// Math.ceil = function(inputNum) {
//   if (inputNum === 0) {
//     return 0;
//   }
//   const arrayOfDigits = Array.from(String(inputNum));
//   if (arrayOfDigits.indexOf(".") === -1) {
//     return Number(arrayOfDigits.join(""));
//   }
//   const decimalPosition = arrayOfDigits.findIndex(el => el === ".");
//   return decimalPosition === -1
//     ? Number(arrayOfDigits[0]) + 1
//     : Number(arrayOfDigits.slice(0, decimalPosition).join("")) + 1;
// };

// Math.floor = function(inputNum) {
//   if (inputNum === 0) {
//     return 0;
//   }
//   const arrayOfDigits = Array.from(String(inputNum));
//   if (arrayOfDigits.indexOf(".") === -1) {
//     return Number(arrayOfDigits.join(""));
//   }
//   const decimalPosition = arrayOfDigits.findIndex(el => el === ".");
//   const roundedNum = Number(arrayOfDigits.slice(0, decimalPosition).join(""));
//   return roundedNum;
// };
