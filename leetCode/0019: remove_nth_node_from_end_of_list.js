var removeNthFromEnd = function(head, n) {
  let len = 0;

  let cur = head;
  while ( cur !== null ) {
    len++;
    cur = cur.next;
  }

  let idx = len - n;
  if ( idx < 0 ) return null;
  if ( len == 1 ) return null;
  
  let pre = null;
  cur = head;
  let i = 0;
  while ( i !== idx ) {
    pre = cur;
    cur = cur.next;
    i++;
  }

  if ( i == 0 ) return cur.next;
  else {
    pre.next = cur.next;
    return head;
  }

};