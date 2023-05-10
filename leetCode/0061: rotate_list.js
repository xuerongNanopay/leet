var rotateRight = function(head, k) {
  if ( head == null ) return null;

  // find length of the linkList.
  // identify break position.
  // rewire the list.

  let len = 0;
  let cur = head;
  let tail = null;
  while ( cur !== null ) {
    tail = cur;
    cur = cur.next;
    len++;
  }

  // break point at k
  k = k % len; //k == 1
  if ( k == 0 ) return head;

  // find break node.
  let i = 0;
  let breakPoint = head;
  while ( i < (len-k-1) ) {
    breakPoint = breakPoint.next;
    i++;
  }

  let newHead = breakPoint.next;
  tail.next = head;
  breakPoint.next = null;
  return newHead
};