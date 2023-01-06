/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const hash = new Map();
    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
    }
    const ent = Array.from(hash.entries());
    ent.sort((a, b) => b[1] - a[1]);
    let sum = 0;
    let res = [];
    for (let [number, count] of ent) {
        sum += count;
        res.push(number);
        if (sum >= (arr.length / 2)) break;
    }
    
    return res.length;
};
