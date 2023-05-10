// 169. Majority Element
function majorityElement(nums) {
  let counter = 0;
  let majority = null;
  for ( let i = 0 ; i < nums.length ; i++ ) {
    if ( counter == 0 ) {
      majority = nums[i];
    }
    counter += majority == nums[i] ? 1 : -1;
  }
  return majority;
}