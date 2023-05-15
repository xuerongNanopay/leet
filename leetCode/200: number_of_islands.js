// 200. Number of Islands
var numIslands = function(grid) {
  let height = grid.length;
  let width = grid[0].length;
  let seen = {};
  let ret = 0;

  var format = function(i, j) {
    return '' + i + '-' + j;
  }

  var calNeighbors = function(grid, i, j) {
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let ret = [];
    for ( let direct of directions ) {
      let new_i = i + direct[0];
      let new_j = j + direct[1];
      if ( !(new_i < 0 || new_j < 0 || new_i >= height || new_j >= width) ) {
        //console.log("aaa: ", i, j, new_i, new_j);
        ret.push([new_i, new_j]);
      }
    }
    return ret; 
  }

  var dfs = function(grid, i, j) {
    let queue = [[i, j]];

    for ( ; queue.length > 0 ; ) {
      let len = queue.length;
      for ( let z = 0 ; z < len ; z++ ) {
        let [i, j] = queue.shift();
        seen[format(i, j)] = true;
        let neighbors = calNeighbors(grid, i, j);
        for ( let nei of neighbors ) {
          let [n_i, n_j] = nei;
          if ( (! ( format(n_i, n_j) in seen)) && grid[n_i][n_j] === "1" ) {
            queue.push([n_i, n_j]);
          }
        }
      }
    }
  }

  for ( let i = 0 ; i < height ; i++ ) {
    for ( let j = 0 ; j < width ; j++ ) {
      let serialize = format(i, j);

      if ( ! (serialize in seen) ) {
        if ( grid[i][j] === "1" ) {
          dfs(grid, i, j);
          ret++;
        }
      }
    }
  }

  return ret;
};