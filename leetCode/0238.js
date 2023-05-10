// 238. Product of Array Except Self

function productExceptSeft(nums) {
  let acc = 1;
  let results = Array(nums.lengh).fill(0);

  for ( let i = 0 ; i < nums.length ; i++ ) {
    results[i] = acc;
    acc = acc * nums[i];
  }

  acc = 1;

  for ( let i = nums.length - 1 ; i >= 0 ; i-- ) {
    results[i] = results[i] * acc;
    acc = acc * nums[i];
  }

  return results;
}