/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
     let fast = head;
  let slow = head;
  
  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }
  
  let secondHalf = slow.next;

  slow.next = null;

  // reverse right half
  let prev = null;
  while(secondHalf){
    const temp = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = temp;
  }
  
  
  let left = head;
  let right = prev;

  // alternate nodes
  while(left && right){
    const tempLeft = left.next;
    const tempRight = right.next;
    
    left.next = right;
    right.next = tempLeft;
    
    left = tempLeft;
    right = tempRight;
  }
};
