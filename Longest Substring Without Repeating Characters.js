/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     const pointer1 = {'l': 0, 'r': 1};
    const pointer2 = {'l': 0, 'r': 1};

    while (pointer2.r <= s.length) {
        const s1 = s.slice(pointer1.l, pointer1.r);
        const s2 = s.slice(pointer2.l, pointer2.r);
        if (new Set(s2.split('')).size < s2.length) { // s2 not unique
            pointer2.l++;
        } else if (s2.length > s1.length) { // unique and bigger
            pointer1.l = pointer2.l;
            pointer1.r = pointer2.r;
            pointer2.r++;
        } else {
            pointer2.r++;
        }
    }
    return s.slice(pointer1.l, pointer1.r).length;
};
