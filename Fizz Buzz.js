/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = [] , curOp;
  for(var i=1; i <= n; i++){       // O(n)
    curOp ="";
    if(i%3 == 0) curOp = "Fizz";    // O(1)
    if(i%5 == 0) curOp += "Buzz";   // O(1)
    if(!curOp) curOp += i;          // O(1)
    result.push(curOp);
  }
  return result;
};
