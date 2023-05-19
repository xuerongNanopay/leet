// 0077. Combinations

var combine = function(n, k) {

  ret = [];

  var process = function(count, start, tmp) {
    if ( count === k  ) {
      ret.push([...tmp]);
      return;
    }

    for ( let i = start ; i <= n ; i++ ) {
      tmp.push(i);
      process(count+1, i+1, tmp);
      tmp.pop(i);
    }
  }

  process(0, 1, []);
  return ret; 
};