var hasPathSum = function(root, targetSum) {
  if ( root == null ) return false;
  return check(root, 0, targetSum)
};

var check = function(root, num, targetSum) {
  if ( root === null ) return false;
  if ( root.left == null && root.right == null) {
    return (num + root.val) === targetSum ? true : false;
  }

  num = num + root.val;

  if ( check(root.left, num, targetSum) == true ) return true;
  else return check(root.right, num, targetSum);
}