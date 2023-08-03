// 1. Two Sum

var twoSum = function(nums, target) {
  let cache = {};
  for ( let i = 0 ; i < nums.length ; i++ ) {
    let c = target - nums[i];
    if ( c in cache ) return [cache[c], i];
    cache[nums[i]] = i;
  }
  return [];
};