// 26. Remove Duplicates from Sotred Array.

function removeDuplicates(nums) {
  let write_idx = 0;
  for ( let i = 0 ; i < nums.length ; i++ ) {
    if ( write_idx == 0 || nums[write_idx-1] != nums[i] ) {
      nums[write_idx++] = nums[i];
    }
  }
  return write_idx;
}