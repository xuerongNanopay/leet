// 222. Count Complete Tree Nodes

var countNodes = function(root) {
  if ( root == null ) return 0;
  let ret = 1;
  ret = ret + countNodes(root.left) + countNodes(root.right);
  return ret;
};