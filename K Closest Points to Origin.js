/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    p = points.sort((a, b) => (a[0]*a[0]+a[1]*a[1]) - (b[0]*b[0]+b[1]*b[1]))
    ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(p[i]) ; 
    }
    return ans;
};
