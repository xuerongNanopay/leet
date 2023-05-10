
// key point how to iterating 2d array in Diag.
function longestPalindrome(s) {
  var dial = s.length; //size of the array
  var array2d = Array(dial).fill(null).map(() => Array(dial).fill(null));
  var ret = {};
  var longest = 0;
  for ( let i = 0 ; i < dial ; i ++ ) {
    array2d[i][i] = true;
    if (!ret[1]) ret[1] = [];
    ret[1].push(s.substring(i, i+1));
    longest = 1;
  }
  
  for ( let i = 0 ; i < dial - 1 ; i++ ) {
    if ( s[i] === s [i+1] ) {
      array2d[i][i+1] = true; 
      if (!ret[2]) ret[2] = [];
      ret[2].push(s.substring(i, i+2));
      longest = 2;
    }
    else array2d[i][i+1] = false; 
  }
  
  for ( let j = 2  ; j < dial ; j++ ) {
    let col = j;
    for ( let i = 0 ; i < dial - j  ; i++ ) {
      let row = i;
  
      if ( s[row] === s[col] && array2d[row+1][col-1] ) {
        array2d[row][col] = true;
        ll = col - row + 1;
        if ( ll >= longest ) {
          longest = ll
          if (!ret[ll]) ret[ll] = [];
          ret[ll].push(s.substring(row, col+1));
        }
      } else {
        array2d[row][col] = false;
      }
      //refactor col index is important.
      col = col + 1;
    }
  }

  console.log(array2d);
  console.log(longest);
  return ret[longest];
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));