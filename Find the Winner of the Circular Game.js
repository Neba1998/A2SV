/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
     let arr = Array.from({length: n}, (_, i) => i + 1), toBeRemovedIndex = 0;
    let length = arr.length;
    while(length > 1) {
        toBeRemovedIndex = (toBeRemovedIndex + k - 1)%(length);
        arr.splice(toBeRemovedIndex, 1);     
        length = arr.length;
    }
    return arr[0];
};
