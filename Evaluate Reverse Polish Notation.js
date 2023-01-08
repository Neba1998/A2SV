/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
        let arr =[]
    for(let i =0; i<tokens.length;i++){
        if(tokens[i] == "+"){
            let sec = +arr.pop()
            let fir = +arr.pop()
            arr.push(sec + fir)
        }
        else if(tokens[i] == "-"){
            let sec = +arr.pop()
            let fir = +arr.pop()
            arr.push(fir - sec)
        }
        else if(tokens[i] == "*"){
            let sec = +arr.pop()
            let fir = +arr.pop()
            arr.push(sec * fir)
        }
        else if(tokens[i] == "/"){
            let sec = +arr.pop()
            let fir = +arr.pop()
            arr.push(Math.trunc(fir/sec))
        }
        else arr.push(tokens[i])
    }
    return arr[0]
};
