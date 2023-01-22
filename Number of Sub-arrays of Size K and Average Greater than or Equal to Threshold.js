/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let total = 0;
    let left = 0;
    let right = k;
    let sum = arr.slice(left, right).reduce((a, b) => a + b, 0);
    while (right <= arr.length) {
        if (left > 0) {
            sum -= arr[left - 1];
            sum += arr[right - 1];
        }
        if (sum / k >= threshold) {
            total++;
        }
        left++;
        right++;
    }
    return total;
};
