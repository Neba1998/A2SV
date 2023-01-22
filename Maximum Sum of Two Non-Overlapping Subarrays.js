/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A,L,M) {
      return Math.max(traverse(L,M), traverse(M,L));
    
    function traverse(a, b) {
        let res = 0;
        for (let i = 0; i <= A.length-a-b; i++) {
            let sum = A.slice(i,i+a+b).reduce((acc,cur) => acc+cur);
            let l = i+a, r = l+b;
            res = Math.max(res, sum);
            while (r < A.length) {
                sum = sum-A[l]+A[r];
                res = Math.max(res, sum)
                l++, r++;
            }
        }
        return res;
    }
};
