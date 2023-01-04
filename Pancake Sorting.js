/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
        let res = [];
    for(let i=arr.length-1; i > 0; i--) {
        for(let j=0; j <= i; j++) {
            if(arr[j] === i+1) {
                flip(arr, j);
                res.push(j+1);
                break;
            }
        }
        flip(arr, i);
        res.push(i+1);
    }
    return res;
};

function flip(arr, k) {
    for(let i=0; i < k/2; i++) {
        let temp = arr[i];
        arr[i] = arr[k-i];
        arr[k-i] = temp;
    }
};
