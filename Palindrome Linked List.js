/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
 let answer = [];
 let pointer = head;
 while(pointer != null){
     answer.push(pointer.val);
     pointer = pointer.next;
 }
  let l= 0 ;
  let r = answer.length-1 ;
  while(l < r){
      if(answer[l] != answer[r]){
      return false;
      }
      l++;
      r--;
  }
   return true;
};
