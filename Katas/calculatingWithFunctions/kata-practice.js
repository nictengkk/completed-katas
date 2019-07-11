// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...

//seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

const makeNum = (num, func) => {
  console.log(num, func);
  return func === undefined ? num : func(num);
};
const zero = func => makeNum(0, func);
const one = func => makeNum(1, func);
const two = func => makeNum(2, func);
const three = func => makeNum(3, func);
const four = func => makeNum(4, func);
const five = func => makeNum(5, func);
const six = func => makeNum(6, func);
const seven = func => makeNum(7, func);
const eight = func => makeNum(8, func);
const nine = func => makeNum(9, func);

const minus = x => {
  return y => {
    return y - x;
  };
};
const times = x => {
  return y => {
    return x * y;
  };
};
const plus = x => {
  return y => {
    return x + y;
  };
};
const dividedBy = x => {
  return y => {
    return Math.floor(y / x);
  };
};
