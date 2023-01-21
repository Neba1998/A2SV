/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
      let index = 0;
    let len = chars.length;
    let i=0;
    while(i<len){
        let j = i + 1;
        while(j < len && chars[i] == chars[j]){
            j++;
        }
        chars[index++] = chars[i];
        let count = j-i;
        if(count > 1){
            let str = count+"";
            for(let k=0;k<str.length;k++){
                chars[index++] = str[k];
            }
        }
        i=j;
    }
    return index;
};
