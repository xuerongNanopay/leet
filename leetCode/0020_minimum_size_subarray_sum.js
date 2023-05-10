var minSubArrayLen = function(target, nums) {
  let head = 0;
  let ret = Number.MAX_SAFE_INTEGER;
  let acc = 0;

  for ( let i = 0 ; i < nums.length ; i++ ) {
    acc += nums[i];

    while ( acc >= target ) {
      ret = Math.min(ret, i - head + 1);
      acc -= nums[head++];
    }
  }
  return ret == Number.MAX_SAFE_INTEGER ? 0 : ret;
};