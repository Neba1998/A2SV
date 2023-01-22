/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, K) {
       let left = 0, right = 0;
    
    while(right < nums.length) {
        if(nums[right] === 0) K--;
        if(K < 0) {
            if(nums[left] === 0) K++;
            left++;
        }
        right++;
    }
    return right-left;
};
