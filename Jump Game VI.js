/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
      // curr => max (of k before) + currVal
    const len = nums.length;
    const dp = new Array(len).fill(-Infinity);
    
    const heap = new MaxPriorityQueue({
        priority: x => x.val
    });
    
    dp[0] = nums[0];
    heap.enqueue({ val: nums[0], idx: 0 });
    
    for(let i = 1; i < len; i++) {
		// remove unreached nodes before
        while(heap.front().element.idx < i - k) {
            heap.dequeue();
        }
        const top = heap.front().element;
        dp[i] = Math.max(dp[i], top.val + nums[i]);
        heap.enqueue({ val: dp[i], idx: i });
    }
    return dp[len - 1]
};
