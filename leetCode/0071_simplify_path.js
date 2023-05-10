// 71. Simplify Path

var simplifyPath = function(path) {
  // . : current
  // .. : up
  // //// : /
  // ... : filename

  let stack = [];
  let letters = path.split("");

  while( letters.length > 0 ) {
    if ( letters[0] == '.' ) {
      let tmp = letters.shift();
      while ( letters[0] !== '/' && letters.length > 0 ) tmp += letters.shift();
      if ( tmp === '.' ) continue;
      else if ( tmp === '..' && stack.length != 0 ) stack.pop();
      else if ( tmp === '..' ) continue;
      else stack.push(tmp);
    } else if ( letters[0] === '/') {
      let tmp = letters.shift();
      while ( letters[0] === '/' && letters.length > 0 ) tmp += letters.shift();
      continue;
    } else {
      console.log('aa', letters)
      let tmp = '';
      while ( letters[0] !== '/' && letters.length > 0 ) tmp += letters.shift();
      console.log('aa', letters)
      console.log(tmp);
      stack.push(tmp);
    }
  }
  
  ret = "";
  for ( let i = 0 ; i < stack.length ; i++ ) {
    ret += "/" + stack[i];
  }
  return ret.length == 0 ? "/" : ret;
};