/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
      let table={};
    let result=[];
    for(let v=0;v<s.length;v++){
            table[s[v]]=v
    }
     let size=0,end=0;
     for(let i=0;i<s.length;i++){
         size+=1;
         end=table[s[i]]>end?table[s[i]]:end;
         if(i==end){
            result.push(size);
            size=0;
         }
     }
     return result;
};
