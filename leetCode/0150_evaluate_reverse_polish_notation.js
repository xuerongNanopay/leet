// 150. Evaluate Reverse Polish Notation

var evalRPN = function(tokens) {
  let stack = [];
  
  for ( let token of tokens ) {
    console.log(stack)
    if ( token === "+" ) {
      let after = stack.pop();
      let before = stack.pop();
      stack.push(before+after);
    } else if ( token === "-" ) {
      let after = stack.pop();
      let before = stack.pop();
      stack.push(before-after);
    } else if ( token === "/" ) {
      let after = stack.pop();
      let before = stack.pop();
      stack.push(Math.trunc(before/after));
    } else if ( token === "*" ) {
      let after = stack.pop();
      let before = stack.pop();
      stack.push(before*after);
    } else {
      stack.push(Number.parseInt(token));
    }
  }
  return stack.pop();
};