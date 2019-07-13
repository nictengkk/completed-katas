// Implement a method that accepts 3 integer values a, b, c.The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//using heron's formula, where area = sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c) has to be more than 0. perimeter = a + b + c / 2.

const isTriangle = (a, b, c) => {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c)) > 0 ? true : false;
};

console.log(isTriangle(1, 2, 2));
