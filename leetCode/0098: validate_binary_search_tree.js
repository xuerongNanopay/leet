// 98. Validate Binary Search Tree

var isValidBST = function(root) {
  
  let stack = [];
  let cursor = root;

  while ( cursor !== null ) {
    stack.push(cursor);
    cursor = cursor.left;
  }

  let curNumber = Number.MIN_SAFE_INTEGER;
  
  while ( stack.length !== 0 ) {
    let node = stack.pop();
    if ( node.val <= curNumber ) return false;

    curNumber = node.val;

    cursor = node.right;
    while ( cursor !== null ) {
      stack.push(cursor);
      cursor = cursor.left;
    }
  }

  return true;
};