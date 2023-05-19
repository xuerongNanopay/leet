// 46. Permutations

var permute = function(nums) {
  // Idea: get from nums one by one and check if nums empty.
  // Change the number and set it back

  let ret = [];

  let process = function(count, tmp) {
    if ( nums.length === count ) {
      ret.push([...tmp]);
      return;
    }

    let len = nums.length;
    for ( let i = 0 ; i < len ; i++ ) {
      if ( nums[i] !== 11 ) {
        let origin = nums[i];
        nums[i] = 11;
        tmp.push(origin);
        process(count+1, tmp)
        tmp.pop();
        nums[i] = origin;
      }
    }
  }

  process(0, []);
  return ret;
};