// 219. Contains Duplicate II

var containsNearbyDuplicate = function(nums, k) {
  cache = {};

  for ( let i = 0 ; i < nums.length ; i++ ) {
    if ( i > k ) {
      delete cache[nums[i - k - 1]];
    }
    if ( nums[i] in cache ) {
      console.log(cache, nums[i], i)
      return true;
    }
    cache[nums[i]] = i;
  }
  return false;
};