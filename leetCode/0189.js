// 189. Rotate Array
function rotate(nums, k) {

  k = k % nums.length;
  reverse(nums, 0, nums.length-1);
  reverse(nums, 0, k-1);
  reverse(nums, k, nums.length-1);

}
function reverse(nums, l, r) {
  while ( l < r ) {
    let tmp = nums[l];
    nums[l] = nums[r];
    nums[r] = tmp;
  }
}