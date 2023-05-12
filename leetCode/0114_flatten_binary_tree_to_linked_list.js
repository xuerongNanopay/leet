// 114. Flatten Binary Tree to Linked List

var ret = new TreeNode(-1);
var work = ret;
var flatten = function(root) {

  process(root);
  return ret.right;
};

var process = function(root) {
  if ( root == null ) {
    return;
  }

  let l = root.left;
  let r = root.right;

  root.left = null;
  root.right = null;

  work.right = root;
  work = work.right;

  process(l);
  process(r)
}