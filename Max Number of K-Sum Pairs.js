/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
     nums.sort((a, b) => a - b);
    let start = 0;
    let end = nums.length - 1;
    let count = 0;
    
    while (start < end) {
        if (nums[start] + nums[end] > k) {
            end--;
        } else if (nums[start] + nums[end] < k) {
            start++;
        } else {
            start++;
            end--;
            count++;
        }
    }  
    return count;
};
