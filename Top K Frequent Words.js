/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();

words.sort()
for (let i = 0; i < words.length; i++) {
    if(!map.get(words[i])) {
        map.set(words[i], 1)
        continue;
    }
    map.set(words[i], map.get(words[i]) + 1 )
    
}


const map2 = new Map([...map.entries()].sort((a, b) => {
    return b[1] - a[1]
}));



const res = Array.from(map2.keys()).slice(0, k);
    
    return res
};
