/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var value = new ListNode
    value.next = head
    getMethod(value,n)
    return value.next 
    
};
function getMethod(head,n){
    if(head==null){
        return 0
    }
    var value = getMethod(head.next,n)
    if(value==n){
        head.next = head.next.next
    }
    
    return value+1
}
