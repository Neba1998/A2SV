/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
     const dummy = new ListNode();
  let current = head;
  while (current) {
    const temp = current;
    current = current.next;
    temp.next = null;
    let pos = dummy;
    while (pos.next) {
      if (pos.next.val > temp.val) {
        temp.next = pos.next;
        pos.next = temp;
        break;
      }
      pos = pos.next;
    }
    pos.next = temp;
  }
  return dummy.next;
};
