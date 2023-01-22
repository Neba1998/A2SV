/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let n=cardPoints.length;
    let c=0;
    let e_sum=0;
    let s_sum=0;
    let s=0;
    let result=0;
    let e=k;

    if(n==k){
        let sum=0;
        for(let i=0;i<n;i++){
            sum+=cardPoints[i];
        }
        return sum;
    }

    for(let i=n-1;c<k;i--){
        e_sum+=cardPoints[i];
        c++;
    }

    while(e!=-1){
        result=Math.max(result,e_sum+s_sum);
        s_sum+=cardPoints[s];
        if(n-e<n)e_sum-=cardPoints[n-e];
        s++;
        e--;
    }

    return result;
};
