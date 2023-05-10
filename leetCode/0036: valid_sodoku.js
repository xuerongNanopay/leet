// 36. Valid Sudoku

var isValidSudoku = function(board) {
  // key: row-{i}-{number}, col-{j}-{number}, blk-{row/3}-{column/3}-number

  let cache = {};

  for ( let z = 0 ; z < 9*9 ; z++ ) {

    let i = Math.floor(z/9);
    let j = z % 9;
    if ( board[i][j] === '.' ) continue;

    if ( !! findCache(cache, i, j, board[i][j]) ) {
      return false;
    }
    putCache(cache, i, j, board[i][j])
    
  }
  
  return true;
};
function findCache(cache, i, j, number) {
  if ( !! cache[`row-${i}-${number}`] ) return true;
  if ( !! cache[`col-${j}-${number}`] ) return true;
  if ( !! cache[`blk-${Math.floor(i/3)}-${Math.floor(j/3)}-${number}`] ) return true;
}

function putCache(cache, i, j, number) {
  cache[`row-${i}-${number}`] = true;
  cache[`col-${j}-${number}`] = true;
  cache[`blk-${Math.floor(i/3)}-${Math.floor(j/3)}-${number}`] = true;
}