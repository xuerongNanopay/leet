// 133. Clone Graph

var cloneGraph = function(node) {
  if ( node === null ) return null;
  let seen = {[node.val]: new Node(node.val, [])};
  let queue = [node];

  while ( queue.length !== 0 ) {
    let cur_node = queue.shift();

    let new_node = seen[cur_node.val];

    for ( let node of cur_node.neighbors ) {
      let n = null;
      if ( !(node.val in seen) ) {
        n = new Node(node.val, []);
        seen[n.val] = n;
        queue.push(node);
      } else {
        n = seen[node.val];
      }
      new_node.neighbors.push(n);
    }
  }
  return seen[node.val];
};