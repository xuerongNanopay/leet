// 20. Valid Parentheses

var isValid = function(s) {
  let stack = [];
  let cache = {'}':'{', ')':'(', ']':'['};
  for ( let i = 0 ; i < s.length ; i++ ) {
    if ( s[i] === "(" || s[i] == "{" || s[i] == "[" ) stack.push(s[i]);
    else {
      let start = stack.pop();
      if ( start !== cache[s[i]] ) return false;
    }
  }
  return stack.length == 0 ? true : false;
};