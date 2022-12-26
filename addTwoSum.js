/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let a = 0;
  let b = 0;
  let test;
  for (let i = 0; i < nums.length; i++) {
    a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      b = nums[j];
      test = a + b;
      if (target == test) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([3, 3], 6));
