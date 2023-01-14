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
var sortList = function(head) {
        const arr = [];
    let node = head;
    
    //Fill the array
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    
    arr.sort((a,b) => a - b);
    
     head = node; 
    
    for(const n of arr) {
        node.val = n; 
        node = node.next;
    }
    
    return head;
};
