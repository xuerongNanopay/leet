// 202. Happy Number

var isHappy = function(n) {
  let cache = {};

  while ( true ) {
    if ( n in cache ) return false;
    cache[n] = true;
    n = squareSum(n);
    if ( n == 1 ) return true;
  }
  return false;
};

function squareSum(num) {
  let ret = 0
  while ( num != 0 ) {
    ret += (num % 10) * (num % 10);
    num = Math.floor(num/10);
  }
  return ret;
}