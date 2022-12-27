/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    let power=Math.log10(n) / Math.log10(4);
   return power%1==0;
};
