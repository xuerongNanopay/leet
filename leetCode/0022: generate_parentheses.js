// 22. Generate Parentheses

var generateParenthesis = function(n) {
  //Idea: count for open brack

  let ret = [];

  let process = function(left, right, tmp) {
    if ( right === n ) {
      ret.push(tmp.join(""));
      return;
    }

    if ( left === right ) {
      tmp.push('(');
      process(left+1, right, tmp);
      tmp.pop();
    } else if ( left === n ) {
      tmp.push(')');
      process(left, right+1, tmp);
      tmp.pop();
    } else {
      tmp.push('(');
      process(left+1, right, tmp);
      tmp.pop();

      tmp.push(')');
      process(left, right+1, tmp);
      tmp.pop();
    }
  }

  process(0, 0, []);
  return ret;
};