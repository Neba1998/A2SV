/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
     let len = nums.length, best = len + 1,
        stack = [], spos = 0, sum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i]
        if (sum <= 0)
            spos = stack.length, sum = 0
        else {
            stack.push(i)
            while (nums[stack[stack.length-1]] < 0)
                nums[stack[stack.length-2]] += nums[stack.pop()]
        }
        while (sum >= k) {
            best = Math.min(best, i - stack[spos] + 1)
            sum -= nums[stack[spos++]]
        }
    }
    return best === len + 1 ? -1 : best
};
