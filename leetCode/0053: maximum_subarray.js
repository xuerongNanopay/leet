// 53. Maximum Subarray

var maxSubArray = function(nums) {
  let ret = Number.MIN_SAFE_INTEGER;
  let tmp = 0

  for ( let i = 0; i < nums.length ; i++ ) {

    tmp += nums[i]
    ret = Math.max(ret, tmp)

    if ( tmp <= 0 ) {
      tmp = 0
    }
  }
  return ret
};