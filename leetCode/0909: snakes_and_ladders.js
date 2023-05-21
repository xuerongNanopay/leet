// 909. Snakes and Ladders


var snakesAndLadders = function(board) {
  
  let n = board.length;
  let next = Array(1 + n*n).fill(-1);

  let cursor = 1;
  let zip = 0;
  for ( let i = n - 1 ; i >= 0 ; i-- ) {
    if ( zip % 2 === 0 ) {
      for ( let j = 0 ; j < n ; j++ ) {
        next[cursor++] = board[i][j]; 
      }
    } else {
      for ( let j = n-1 ; j >=0 ; j-- ) {
        next[cursor++] = board[i][j]; 
      }
    }
    zip++;
  }
  let queue = [1];
  let ret = 0;
  let seen = {1: true};

  while ( queue.length !== 0 ) {
    ret++;
    let len = queue.length;
    for ( let i = 0 ; i < len ; i++ ) {
      let cur = queue.shift();
      for ( let j = cur + 1 ; j <= Math.min(cur+6, n*n) ; j++ ) {
        let nextStep = next[j] !== -1 ? next[j] : j;
        if ( nextStep === n*n ) return ret;

        if ( nextStep in seen ) continue;

        queue.push(nextStep);
        seen[nextStep] = true;
      }
    }
  }
  return -1;
};