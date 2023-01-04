/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=> a-b);
    let start =0;
    let end = nums.length-1;
    let max = 0;
     while(start<end){
        max = Math.max(nums[start]+nums[end],max)
        start++;
        end--;
    }
     return max;
};
