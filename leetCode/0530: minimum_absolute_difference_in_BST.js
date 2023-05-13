// 530. Minimum Absolute Difference in BST

var getMinimumDifference = function(root) {
  let ret = Number.MAX_SAFE_INTEGER;
  let tmp = [];
  var process = function(root) {
    if ( root === null ) return;

    process(root.left);
    tmp.push(root.val);
    process(root.right);
  }

  process(root);

  for ( let i = 0 ; i < tmp.length - 1 ; i++ ) {
    ret = Math.min(ret, Math.abs(tmp[i]-tmp[i+1]));
  }
  return ret;
};