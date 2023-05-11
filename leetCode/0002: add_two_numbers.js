var addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0);
};

var add = function(l1, l2, carry) {
  if ( l1 === null && l2 === null ) {
    if ( carry === 1 ) return new ListNode(1, null);
    else return null;
  }
  let val = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;

  let newNode = new ListNode(val%10, null);

  newNode.next = add((l1 === null ? null : l1.next), (l2 === null ? null : l2.next), Math.trunc(val/10));
  return newNode;
}