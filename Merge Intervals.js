/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    int = intervals.sort((a, b) => (a[0]) - (b[0]))
    let result=[];
    let interval1=intervals[0];
    for(let i=1;i<intervals.length;i++){
         let interval2=intervals[i];
        if(interval2[0]<=interval1[1]){
            interval1[1]=Math.max(interval1[1] ,interval2[1]);
        }else{
            result.push(interval1);
            interval1=interval2;
        }
        }
    result.push(interval1);
    return result;
};
