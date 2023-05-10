// 45. Jump Game II

function jump(nums) {
  let step = 0;
  let end = 0;
  let longest = 0;

  for ( let i = 0 ; i < nums.length - 1 ; i++ ) {
    longest = Math.max(longest, i+nums[i]);
    if ( longest >= nums.length-1 ) {
      // perform last jump.
      step++;
    }

    if ( end == i ) {
      // do jump.
      step++;
      end = longest;
    }
  }
  return step;
} 