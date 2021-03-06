//6kyu

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//     Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of ProjectEuler.net

// resources:
//https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n

const solution = number => {
  return number <= 0
    ? 0
    : Array.from(Array(number).keys())
        .filter(num => num % 3 === 0 || num % 5 === 0)
        .reduce((acc, num) => acc + num);
};

console.log(solution(10));
