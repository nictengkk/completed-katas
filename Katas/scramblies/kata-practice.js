//5 kyu

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

//     Notes:

// Only lower case letters will be used(a - z).No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://stackoverflow.com/questions/52358645/why-is-my-javascript-too-slow-for-this-scramblies-task

const scramble = (str1, str2) => {
  const hashing = str => {
    return str.split("").reduce(function(prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
  };
  let obj1 = hashing(str1);
  let obj2 = hashing(str2);

  for (let key in obj2) {
    if (!obj1[key] || obj1[key] < obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(scramble("cedewaraaossoqqyt", "codewars"));
