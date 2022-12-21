/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let lowerCount = 0;
    let matchingCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            ++lowerCount;
        } else if (nums[i] === target) {
            ++matchingCount;
        }
    }
    
    let result = [];
    
    for (let i= lowerCount; i < lowerCount + matchingCount; i++) {
        result.push(i);
    }
    
    return result;
};
