var calculate = function(s) {
  let stack = [1];
  let sign = 1; // Only need to consider sign. So when counter '(' push sigh, counter ')' pop sign.
  let acc = 0;
  let num = 0;

  for ( let i = 0 ; i < s.length ; i++ ) {
    if ( ! Number.isNaN(Number.parseInt(s[i])) ) {
      num = num*10 + Number.parseInt(s[i]);
    } else if ( s[i] === '(' ) {
      stack.push(sign);
    } else if ( s[i] === ')' ) {
      stack.pop();
    } else if ( s[i] === '+' || s[i] === '-' ) {
      acc = sign === -1 ? acc - num : acc + num;
      sign = s[i] === '+' ? stack[stack.length-1] : stack[stack.length-1] * -1;
      num = 0;
    }
  }

  return sign === -1 ? acc - num : acc + num;
};