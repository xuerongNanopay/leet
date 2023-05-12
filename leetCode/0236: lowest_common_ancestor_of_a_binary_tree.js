// 236. Lowest Common Ancestor of a Binary Tree

var lowestCommonAncestor = function(root, p, q) {
  if ( root == null || root === p || root === q ) return root;

  let l = lowestCommonAncestor(root.left, p, q);
  let r = lowestCommonAncestor(root.right, p, q);

  if ( l != null && r != null ) return root;
  return l === null ? r : l;
};