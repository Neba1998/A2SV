/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
      var left=0;
    var length=nums.length+1;
    var total=0;

    for(var right=0;right<nums.length;right++){
        total+=nums[right];
        while (total>=target){
            length=Math.min(right-left+1,length);
            total-=nums[left];
            left++;
        }
    }
    
    if(length!=nums.length+1){
        return length;
    }else{
        return 0;
    }
};
