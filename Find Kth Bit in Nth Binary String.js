/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
     let dp = [0], num = 1 
    for(let i = 1; i < k; i++) {
        if(i === num) {  
            num = 2 * num + 1
            dp[i] = 1 
        } else {
            dp[i] = dp[num - 1 - i] ^ 1
        }
    }
    return dp[k - 1] + ''
};
