// 102. Binary Tree Level Order Traversal

var levelOrder = function(root) {
  if ( root === null ) return [];
  let ret = [];

  var process = function(queue) {
    if ( queue.length === 0 ) return;

    let len = queue.length;

    let tmp = [];
    for ( let i = 0 ; i < len ; i++ ) {
      let node = queue.shift();
      tmp.push(node.val);

      if ( node.left !== null ) queue.push(node.left);
      if ( node.right !== null ) queue.push(node.right);
    }

    ret.push(tmp);
    process(queue);
  }

  process([root]);
  return ret;
};