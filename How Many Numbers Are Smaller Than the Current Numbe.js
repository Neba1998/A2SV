/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
     let numSmall = [];
  
  for (let i = 0; i < nums.length; i ++) {
      numSmall[i] = 0;
      for (let j = 0; j < nums.length; j ++) {
        if (nums[i] > nums[j]) {
          numSmall[i] += 1;
        } 
      }
    }
  
  return numSmall;
};
