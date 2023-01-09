/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
     let res = []
    for(i in l) {
        let newArr = nums.slice(l[i], r[i]+1)
        newArr.sort((a,b) => a-b)
        let val = helper(newArr)
        res.push(val)   
    }
    return res
};
var helper = function(nums) {
    // if(nums.length < 3) return 0;
    var prevDiff = nums[1] - nums[0]
    for(let i=1; i<nums.length-1; i++) {
        if(prevDiff !== nums[i+1] - nums[i]) return false
    }
    return true
}
