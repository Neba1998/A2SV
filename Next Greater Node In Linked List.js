/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
   var result=[];
    var ansMap=new Map();
    var stack=[];
    var it=head;
    let i=0;
    while(it)
    {
       while(stack.length&&stack[stack.length-1][0]<it.val)
            {
                ansMap.set(stack[stack.length-1][1],it.val);
                stack.pop();
            }
            stack.push([it.val,i]); 
            it=it.next;
            i+=1;
    }
    i=0;

     while(head)
     {
         result.push(ansMap.has(i)?ansMap.get(i):0);
         head=head.next;
         i+=1;
     }

return result; 
};
