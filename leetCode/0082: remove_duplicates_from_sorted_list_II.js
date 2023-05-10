var deleteDuplicates = function(head) {
  let newHead = new ListNode(-1, head);
  let cur = newHead;

  while ( cur.next != null && cur.next.next != null ) {
    if ( cur.next.val === cur.next.next.val ) {
      let tmp = cur.next;
      let v = cur.next.val;
      while ( tmp != null && v === tmp.val ) {
        tmp = tmp.next;
      }
      cur.next = tmp;
    } else {
      cur = cur.next;
    }
  }
  return newHead.next;
};