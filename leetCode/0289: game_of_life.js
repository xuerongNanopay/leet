// 289. Game of Life

var gameOfLife = function(board) {
  // current is alive: three possibles
  // current is dead: one possibles

let height = board.length;
let width = board[0].length;
for ( let i = 0 ; i < height ; i++ ) {
  for ( let j = 0 ; j < width ; j++ ) {
    board[i][j] = board[i][j] << 1;
  }
}
console.log(board)
console.log(countNeighbor(board, 1, 0));
for ( let i = 0 ; i < height ; i++ ) {
  for ( let j = 0 ; j < width ; j++ ) {
    let [die, live] = countNeighbor(board, i, j);

    // Apply rules.
    if ( (board[i][j] & 2) == 2 ) {
      if ( live < 2 ) {
        //board[i][j] += 2;
      } else if ( live == 2 || live == 3 ) {
        board[i][j] += 1;
      } else if ( live > 3 ) {
        //board[i][j] |= 2;
      }
    } else {
      if ( live == 3 ) {
        board[i][j] += 1;
      }
    }
  }
}
console.log(board)

  for ( let i = 0 ; i < height ; i++ ) {
  for ( let j = 0 ; j < width ; j++ ) {
    board[i][j] = board[i][j] & 1;
  }
}
};

// return [number of die, number of live]
function countNeighbor(board, i, j) {
let die = 0;
let live = 0;

// There are 8 cases.
let cases = [[-1,-1], [-1, 0], [0, -1], [0, 1], [1, 0], [1, 1], [1, -1], [-1, 1]]

for ( let c of cases ) {
  let n_i = i + c[0];
  let n_j = j + c[1];
  if ( ! outofBoard(board, n_i, n_j) ) {
    if ( (board[n_i][n_j] & 2) == 2 ) {
      live++;
    } else if( (board[n_i][n_j] & 2) == 0 ) {
      die++;
    }
  }
}

return [die, live];
}
// return true if yes.
function outofBoard(board, i, j) {
let height = board.length;
let width = board[0].length;
if ( i < 0 || i >= height || j < 0 || j >= width ) return true;
return false;
}