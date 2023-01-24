/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
       var result = [0, k, 2 * k];
    var sums = [nums.slice(0, k).reduce((a, b) => a + b, 0)];
    var rightMaxIdx = [];

    for (var i = 1; i <= nums.length - k; i++) {
        sums[i] = sums[i - 1] - nums[i - 1] + nums[i + k - 1];
    }

    rightMaxIdx[nums.length - k] = nums.length - k;
    for (var i = nums.length - k - 1; i >= 2 * k; i--) {
        if (sums[i] >= sums[rightMaxIdx[i + 1]]) {
            rightMaxIdx[i] = i;
        } else {
            rightMaxIdx[i] = rightMaxIdx[i + 1];
        }
    }

    var midMaxIdx = [];
    midMaxIdx[nums.length - 2 * k] = nums.length - 2 * k
    for (var i = nums.length - 2 * k - 1; i >= k; i--) {
        if (sums[i] + sums[rightMaxIdx[i + k]] >= sums[midMaxIdx[i + 1]] + sums[rightMaxIdx[midMaxIdx[i + 1] + k]]) {
            midMaxIdx[i] = i;
        } else {
            midMaxIdx[i] = midMaxIdx[i + 1];
        }
    }

    var leftMaxIdx = [];
    leftMaxIdx[nums.length - 3 * k] = nums.length - 3 * k;
    for (var i = nums.length - 3 * k - 1; i >= 0; i--) {
        if (sums[i] + sums[midMaxIdx[i + k]] + sums[rightMaxIdx[midMaxIdx[i + k] + k]]
            >= sums[leftMaxIdx[i + 1]] + sums[midMaxIdx[leftMaxIdx[i + 1] + k]] + sums[rightMaxIdx[midMaxIdx[leftMaxIdx[i + 1] + k] + k]]) {
            leftMaxIdx[i] = i;
        } else {
            leftMaxIdx[i] = leftMaxIdx[i + 1];
        }
    }

    result = [leftMaxIdx[0], midMaxIdx[leftMaxIdx[0] + k], rightMaxIdx[midMaxIdx[leftMaxIdx[0] + k] + k]];

    return result;
};
