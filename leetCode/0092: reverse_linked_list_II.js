// 92. Reverse Linked List II

var reverseBetween = function(head, left, right) {

  let idx = 0;
  let tmp = head;
  let pre = null;
  for ( ; idx < (left-1) ; idx++ ) {
    pre = tmp;
    tmp = tmp.next;
  }

  let l = tmp

  for ( ; idx < right ; idx++ ) {
    tmp = tmp.next;
  }

  let r = tmp;

  if ( l == r ) return head;
  
  let n = reverse(l, r);
  if ( pre != null ) {
    pre.next = n;
  } else {
    head = n;
  }
  l.next = r;
  return head;
  
};

// [head, tail)
var reverse = function(head, tail) {
  let pre = null;
  let cur = head;

  while(cur != tail) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  return pre;
}