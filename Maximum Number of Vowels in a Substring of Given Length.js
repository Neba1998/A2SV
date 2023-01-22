/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
     let obj = { "a": 1, "e": 1, "i": 1, "o": 1, "u": 1 }
 
  let vowcount = 0
  let ans = 0
  for(var i = 0 ; i< k ; i++){
     if (obj[s[i]]) vowcount++ }
     ans = Math.max(ans, vowcount)

  while (i < s.length ) {
    if(obj[s[i-k]])vowcount--
    if (obj[s[i]]) vowcount++
     ans = Math.max(ans, vowcount)
     i++
  }
  return ans
};
