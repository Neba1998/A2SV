/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let result = 0, len = (piles.length * (2/3));
    piles.sort((a, b) => {return b - a});
    for(let i = 1; i < len; i+=2){
         result += piles[i];
   }
    return result;
};
