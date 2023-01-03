/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
     if (changed.length % 2 === 1) return []; 
    let double = true;
    changed.sort((a,b)=>a-b) 
    let i = 0;
    while (i < changed.length){
        let pos = changed.indexOf(changed[i]*2, i+1);
        if (pos === -1){
            double = false; 
            break;
        } else {
            changed.splice(pos,1); 
            i++;
        } 
    }
    return (double? changed: []);
};
