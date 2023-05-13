// 101. Symmetric Tree

var isSymmetric = function(root) {
  return process(root, root);
}

var process = function(p, q) {
  if ( p === null || q === null ) {
    return p === q;
  }

  return p.val === q.val && process(p.left, q.right) && process(p.right, q.left);
}