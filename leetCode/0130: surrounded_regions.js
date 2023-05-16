// 130. Surrounded Regions

var solve = function(board) {
  let height = board.length;
  let width = board[0].length;

  let calNeighbors = function(i, j) {
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let tmp = [];

    for ( let direct of directions ) {
      let new_i = direct[0] + i;
      let new_j = direct[1] + j;
      if ( new_i < 0 || new_j < 0 || new_i >= height || new_j >= width ) continue;
      tmp.push([new_i, new_j]);
    }
    return tmp;
  }

  let dfs = function(board, i, j) {
    let queue = [[i, j]];

    for ( ; queue.length != 0 ; ) {
      let len = queue.length;

      for ( let i = 0 ; i < len ; i++ ) {
        let [c_i, c_j] = queue.shift();
        board[c_i][c_j] = 'Z';

        let newDirects = calNeighbors(c_i, c_j);
        for ( let direct of newDirects ) {
          let [ n_i, n_j ] = direct;
          if ( board[n_i][n_j] === 'O') {
            queue.push([n_i, n_j]);
          }
        }
      }
    }
  }


  for ( let j = 0 ; j < width ; j++ ) {
    if ( board[0][j] === 'O') dfs(board, 0, j);
    if ( board[height-1][j] === 'O') dfs(board, height-1, j);
  }

  for ( let i = 1 ; i < height - 1 ; i++ ) {
    if ( board[i][0] === 'O') dfs(board, i, 0);
    if ( board[i][width-1] === 'O')  dfs(board, i, width-1);
  }

  for ( let i = 0 ; i < height ; i++ ) {
    for ( let j = 0 ; j < width ; j++ ) {
      if ( board[i][j] === "Z" ) board[i][j] = "O";
      else board[i][j] = "X";
    }
  }
};