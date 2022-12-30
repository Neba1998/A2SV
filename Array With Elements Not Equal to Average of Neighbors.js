/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
     for (let i = 1; i < nums.length - 1; i++) {
        if ((nums[i-1] + nums[i+1]) / 2 === nums[i]) {
            let j = i;
            while (j - 1 >= 0 && (nums[j-1] + nums[j+1]) / 2 == nums[j]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                j--;
            }   
        }
    }
    return nums;
};
