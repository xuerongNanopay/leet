// 53. Maximum Subarray

function maxSubArray(nums) {
  // Array to store maximum sub from left to current/include current index.
  let curMax = Array(nums.length).fill(null).map(() => 0);
  curMax[0] = nums[0];
  for ( let i = 1 ; i < nums.length ; i++ ) {
    curMax[i] = curMax[i-1] >= 0 ? nums[i] + curMax[i-1] : nums[i];
  }
  return Math.max(...curMax);
}


let test1 = [-2, 1 -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(test1));

let test2 = [1];
console.log(maxSubArray(test2));

let test3 = [5, 4, -1, 7, 8];
console.log(maxSubArray(test3));
