// Idea: separate into two list.
// separate into array and rewrite whole list
var partition = function(head, x) {
  let low = [];
  let high = [];

  let cur = head;
  while ( cur != null ) {
    if ( cur.val < x ) low.push(cur.val);
    else high.push(cur.val);
    cur = cur.next;
  }
  
  cur = head;
  while ( cur != null ) {
    let val = low.length !== 0 ? low.shift() : high.shift();
    cur.val = val;
    cur = cur.next;
  }

  return head
};