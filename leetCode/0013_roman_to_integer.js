function romanToInt(s) {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let cur = 1;
  let ret = 0;

  for ( let i = s.length -1 ; i >= 0 ; i-- ) {
    let c = s[i];
    let c_value = map[c];
    if ( c_value >= cur ) {
      ret += c_value;
      cur = c_value;
    } else {
      ret -= c_value;
    }
  }
  return ret;
}