// 67. Add Binary

var addBinary = function(a, b) {
  let a_i = a.split("").reverse().map(i => Number.parseInt(i));
  let b_i = b.split("").reverse().map(i => Number.parseInt(i));
  
  let loop = Math.min(a_i.length, b_i.length);
  let carryOver = 0;
  let ret = "";
  let i = 0;
  for ( ; i < loop ; i++ ) {
    let cur = a_i[i] + b_i[i] + carryOver;
    carryOver = Math.floor(cur / 2);
    let c = cur % 2;
    ret += c;
  }

  while ( i < a_i.length ) {
    let cur = a_i[i] + carryOver;
    carryOver = Math.floor(cur / 2);
    let c = cur % 2;
    ret += c;
    i++;
  }

  while ( i < b_i.length ) {
    let cur = b_i[i] + carryOver;
    carryOver = Math.floor(cur / 2);
    let c = cur % 2;
    ret += c;
    i++
  } 
  if ( carryOver != 0 ) ret += carryOver;
  return ret.split("").reverse().join("")
};