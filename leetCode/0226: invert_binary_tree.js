var invertTree = function(root) {
  process(root)
  return root
};

var process = function(root) {
  if ( root === null ) return;

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  process(root.left);
  process(root.right);
}
