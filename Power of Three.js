/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let power=Math.log10(n)/ Math.log10(3);
return (power%1==0);
};
