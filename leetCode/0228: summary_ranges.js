var summaryRanges = function(nums) {
  if ( nums.length <= 0 ) return [];
  
  let tmp = [] // Store [[index1, index2]...]
  let idx = 0;
  for ( let i = 0 ; i < nums.length ; i++ ) {
    if ( i != 0 && nums[i-1] + 1 !== nums[i] ) {
      tmp.push([idx, i-1]);
      idx = i;
    }
  }

  tmp.push([idx, nums.length-1]);
  let ret = [];
  for ( let e of tmp ) {
    const [l, r] = e;
    if ( l == r ) ret.push("" + nums[l]);
    else ret.push("" + nums[l] + "->" + nums[r]);
  }
  return ret;
};