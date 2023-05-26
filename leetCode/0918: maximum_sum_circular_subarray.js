// 918. Maximum Sum Circular Subarray

var maxSubarraySumCircular = function(nums) {
  
  let total = 0;
  let curMin = 0
  let curMax = 0
  let findMax = Number.MIN_SAFE_INTEGER
  let findMin = Number.MAX_SAFE_INTEGER

  for ( let num of nums ) {
    total += num
    curMin = Math.min(curMin+num, num)
    curMax = Math.max(curMax+num, num)

    findMax = Math.max(curMax, findMax)
    findMin = Math.min(curMin, findMin)
  }
  return findMax < 0 ? findMax : findMax > (total - findMin) ? findMax : total-findMin
};