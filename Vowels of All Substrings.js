/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function(word) {
        let lastVowels = 0;
    let result = 0;
    for (let i = 0; i < word.length; i++) {
	    let newVowels = 0;
        if (isVowel(word[i])) {
            newVowels= (i + 1);
        }
        result += lastVowels + newVowels;
		lastVowels = newVowels + lastVowels;
    }
    return result;
};
let isVowel = function (char) {
    return "aeiou".indexOf(char) !== -1 ? true : false;
};
