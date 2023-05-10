// 15. 3Sum

var threeSum = function(nums) {
  nums = nums.sort((a, b) => a-b);
  let ret = [];
  for ( let i = 0 ; i < nums.length-2 ; i++ ) {
    if ( nums[i] == nums[i-1] ) continue;
    let l = i+1;
    let r = nums.length-1;
    let a = nums[i];

    while( l < r ) {
      if ( a + nums[l] + nums[r] == 0 ) {
        ret.push([a, nums[l], nums[r]]);
        while(nums[++l] == nums[l-1]){};
        while(nums[--r] == nums[r+1]){};
      } else if ( a + nums[l] + nums[r] < 0 ) {
        while(nums[++l] == nums[l-1]){};
      } else {
        while(nums[--r] == nums[r+1]){};
      }
    }
  }
  return ret;
};