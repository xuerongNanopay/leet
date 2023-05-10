// 128. Longest Consecutive Sequence


var longestConsecutive = function(nums) {
  cache = {};
  for ( let i = 0 ; i < nums.length ; i++ ) {
    cache[nums[i]] = true;
  }

  let ret = 0;
  for ( let num of nums ) {
    if ( (num - 1) in cache ) continue;
    let start = num;
    let acc = 0;
    while ( start in cache ) {
      //console.log(start);
      acc++;
      start++;
    }
    ret = Math.max(ret, acc);
  }
  return ret;
};