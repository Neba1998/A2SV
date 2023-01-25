/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
     const res = [];
    const xorResults = [];
    xorResults[0] = arr[0];
   
    for (let i = 1; i < arr.length; i++) {
        xorResults.push(arr[i] ^ xorResults[i - 1]); 
    }
    
    for (const [start, end] of queries) {
        res.push(xorResults[start] ^ xorResults[end] ^ arr[start]);
    }
    
    return res;
};
