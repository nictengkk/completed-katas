// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum.Note that the empty list or array is also a valid sublist / subarray.

//resources:
//https://stackoverflow.com/questions/54970091/maximum-subarray-using-javascript
//https://stackoverflow.com/questions/32367032/kadanes-algorithm-explained

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSequence = arr => {
  let ans = 0;
  let sum = 0;
  arr.forEach((i, a) => {
    ans = Math.max(i, ans + i);
    sum = Math.max(sum, ans);
  });
  return sum;
};

console.log(maxSequence(arr));
