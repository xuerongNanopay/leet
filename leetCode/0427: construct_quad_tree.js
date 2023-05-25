// 427. Construct Quad Tree

var construct = function(grid) {
  
  const build = (grid, i, j, w) => {
    if ( allSame(grid, i, j, w) ) {
      return new Node(grid[i][j] === 1 ? 1 : 0, true)
    }

    const node = new Node(1, false)
    const m = Math.floor(w / 2)
    console.log(m)
    node.topLeft = build(grid, i, j, m);
    node.topRight = build(grid, i, j+m, m);
    node.bottomLeft = build(grid, i+m, j, m);
    node.bottomRight = build(grid, i+m, j+m, m)
    return node
  }

  const allSame = (grid, i, j, w) => {
    for ( let x = i ; x < i + w ; x++ ) {
      for ( let y = j ; y < j + w ; y++ ) {
        if ( grid[x][y] !== grid[i][j] ) return false
      }
    }

    return true
  }
  return build(grid, 0, 0, grid.length)
};