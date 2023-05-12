// 124. Binary Tree Maximum Path Sum

let ret = Number.MIN_SAFE_INTEGER;

var maxPathSum = function(root) {
  ret = Number.MIN_SAFE_INTEGER;
  tmp(root);
  return ret;
};

var tmp = function(root) {
  if ( root === null ) return 0;

  let cur = root.val;
  //Import can support no left side or right side.
  let l = Math.max(tmp(root.left), 0);
  let r = Math.max(tmp(root.right), 0);

  ret = Math.max(ret, cur + l + r);
  return l >= r ? cur + l : cur + r;
}