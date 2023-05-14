// 230. Kth Smallest Element in a BST

var kthSmallest = function(root, k) {
  
  let tmp = [];
  let process = function(root) {
    if ( root === null ) return 0;

    process(root.left);
    tmp.push(root.val);
    process(root.right);

  }

  process(root);
  return tmp[k-1];
};