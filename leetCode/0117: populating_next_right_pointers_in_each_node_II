var connect = function(root) {
  if ( root == null ) return null;
  process([root]);
  return root;
};

var process = function(ret) {
  if ( ret.length === 0 ) {
    return;
  }

  for ( let i = 0 ; i < ret.length - 1 ; i++ ) {
    ret[i].next = ret[i+1]
  }

  let len = ret.length;
  for ( let i = 0 ; i < len ; i++ ) {
    let cur = ret.shift();
    if ( cur.left != null ) ret.push(cur.left);
    if ( cur.right != null ) ret.push(cur.right);
  }

  process(ret);
}