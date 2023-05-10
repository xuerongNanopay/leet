// 80. Remove Duplicates from Sorted Array II

function removeDuplicates(nums) {
  let w_idx = 2;
  for ( let i = 0 ; i < nums.length ; i++ ) {
    if ( nums[w_idx-2] != nums[i] ) {
      nums[w_idx] = nums[i];
      w_idx++
    }
  }
  return w_idx;
}