/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
      let min = 0;
       let low = 0;
       let high = people.length-1
       while(low<=high){
           if(people[low]+people[high] <= limit){
               min++
               low++;
               high--;
           }else{
               high--;
               min++
           }
       }
       return min
}; 
