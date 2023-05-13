// 104. Maximum Depth of Binary Tree

var maxDepth = function(root) {
  let ret = 0;
  var process = function(root, num) {
    if ( root === null ) {
      ret = Math.max(ret, num);
      return;
    }

    process(root.left, num+1);
    process(root.right, num+1);
  }
  process(root, 0);
  return ret;
};