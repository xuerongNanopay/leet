var rightSideView = function(root) {
  if ( root === null ) return [];
  var ret = []
  process([root], ret);
  return ret;
};

function process(roots, ret) {
  if ( roots.length === 0 ) return;

  let len = roots.length;

  for ( let i = 0 ; i < len ; i++ ) {
    let root = roots.shift();
    if ( i === 0 ) {
      ret.push(root.val);
    }

    if ( root.right !== null ) roots.push(root.right);
    if ( root.left !== null ) roots.push(root.left);
  }

  process(roots, ret);
}