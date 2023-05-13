// 103. Binary Tree Zigzag Level Order Traversal

var zigzagLevelOrder = function(root) {
  if ( root == null ) return [];
  let ret = [];

  let process = function(queue, direct) {
    if ( queue.length === 0 ) return;

    let tmp = [];
    let len = queue.length;
    if ( (direct % 2) == 0 ) {
      for ( let i = 0 ; i < len ; i++ ) {
        tmp.push(queue[i].val);
      }
    } else {
      for ( let i = len-1 ; i >= 0 ; i-- ) {
        tmp.push(queue[i].val);
      }
    }

    ret.push(tmp);

    for ( let i = 0 ; i < len ; i++ ) {
      let node = queue.shift();
      if ( node.left !== null ) queue.push(node.left);
      if  ( node.right !== null ) queue.push(node.right);
    }

    process(queue, direct+1);
  }

  process([root], 0);
  return ret;
};