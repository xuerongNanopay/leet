// 27. Remove Element
function removeElement(nums, val) {
  let write_idx = 0;
  for ( let i = 0 ; i < nums.length ; i++ ) {
    if ( nums[i] != val ) {
      nums[write_idx] = val;
      write_idx++;
    }
  }
  return write_idx;
}