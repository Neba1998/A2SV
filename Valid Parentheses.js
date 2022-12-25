/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map={
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    let stck=[];
    for(i=0;i<s.length;i++){
        if(s[i]=="(" || s[i]=="{"|| s[i]=="["){
            stck.push(s[i]);
        }else if(stck[stck.length-1]==map[s[i]]){
            stck.pop();
        }else return false;
         }
             if(stck.length==0){
           return true;
       }
    return false;
};
