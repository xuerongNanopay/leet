// 138. Copy List with Random Pointer

let cache = {}; // 
let array = [];
var copyRandomList = function(head) {
  if ( head == null ) {
    return null;
  }

  for ( let i = 0 ; i < array.length ; i++ ) {
    if ( array[i] == head ) return cache[i];
  }

  let newNode = new Node(head.val, null, null);
  array.push(head);
  cache[array.length-1] = newNode;
  newNode.next = copyRandomList(head.next);
  newNode.random = copyRandomList(head.random);

  return newNode;
};