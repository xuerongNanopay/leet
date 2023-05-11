var reverseKGroup = function(head, k) {

  let tmp = head;
  let idx = 0;
  for ( ; idx < k && tmp != null ; idx++) {
    tmp = tmp.next
  }

  if ( idx < k ) {
    return head;
  }

  let newHead = reverse(head, tmp);
  head.next = reverseKGroup(tmp, k);
  return newHead;
};

// [Head, tail)
var reverse = function(head, tail) {
  let pre = null;
  let cur = head;
  let newHead = null;

  while ( cur != tail ) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  newHead = pre;

  return newHead;
}