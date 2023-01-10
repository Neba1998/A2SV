/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
        let map = new Map();
    let h = citations.length;
    let i=0;
    let max = 0;
    citations.map(c => map[c] = map[c] ? map[c] + 1 : 1);
    for (; i<=h; i++) {
        max = Math.max(max, h >= i ? i : 0);
        h -= map[i] ? map[i] : 0;
    }
    return max;
};
