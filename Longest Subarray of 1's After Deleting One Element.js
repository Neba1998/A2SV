/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
     let start = 0
    let next = 0
    let count =0
    let sum = 0
    let ones = 0
    let deleted = false
    while(next < nums.length)
    {
        if(nums[next] != 0 || !deleted) {
            if(nums[next] == 0){
                deleted = true
                next++
                continue
            }
            count++
            ones++
            next++
            if(count > sum)sum = count
        }
        else {
            if(nums[start]==0)deleted= false
            else count--
            start++
        }
    }
    if(ones == nums.length)return ones-1
    return sum
};
