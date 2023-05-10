var twoSum = function(numbers, target) {
  let r = numbers.length - 1;
  let l = 0;

  while ( l <= r ) {
    let cur = numbers[l] + numbers[r];
    if ( cur == target ) {
      return [l+1, r+1];
    }
    if ( cur < target ) {
      l++;
    }
    if ( cur > target ) {
      r--;
    }
  }
};