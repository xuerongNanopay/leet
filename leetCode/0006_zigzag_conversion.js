// The output doesn't care about the empty space in zig.
var convert = function(s, numRows) {
  if ( numRows <= 1 ) return s; 
  let tmp = Array(numRows).fill(null).map(_ => []);
  let counter = 0; // from 0 to numRows-1
  let sign = 1; // 1 to -1

  for ( let i = 0 ; i < s.length ; i++ ) {
    tmp[counter].push(s[i]);
    //update location for next char.
    counter += sign;
    if ( counter === numRows ) {
      counter = numRows-2;
      sign = -1;
    }
    if ( counter === -1 ) {
      counter = 1;
      sign = 1;
    }
  }
  return tmp.map(a => a.join('')).join('');
};