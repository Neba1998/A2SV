/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
   let ans=nums.sort(function(a,b){
let str1 = '' + a + b;
let str2 = '' + b + a;
if(str1 === str2 )return 0;
return str1 > str2 ? -1 :1;
   }).join('');
  return ans[0]==='0' ? '0' :ans;
    
}; 
