/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {                            
    const map = {};                                           

    const WORD_NUMS = s.split(" ");                           
    for (let wordNum of WORD_NUMS) {                          
        const word = wordNum.slice(0, wordNum.length - 1);    
        const num = wordNum.slice(wordNum.length - 1);        
        map[num] = word;                                     
    }

    const ans = [];
    for (let num = 1; num <= WORD_NUMS.length; num++) {       
        ans.push(map[num]);                                   
    }
    return ans.join(" ");                                     
};

