// 66. Plus One

var plusOne = function(digits) {
  let carryOver = 1;

  for ( let i = digits.length - 1 ; i >= 0 ; i-- ) {
    let tmp = (digits[i] + carryOver) % 10;
    carryOver = Math.trunc((digits[i] + carryOver) / 10);
    digits[i] = tmp;
  }
  if ( carryOver === 1) digits.unshift(1);
  return digits;
};  