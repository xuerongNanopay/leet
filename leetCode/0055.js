//55. Jump Game
function canJump(nums) {
  let jumpTo = 0;
  for ( let i = 0 ; i < nums.length && i <= jumpTo ; i++ ) {
    if ( i + nums[i] > jumpTo ) {
      jumpTo = i + nums[i];
    }
  }
  return i == nums.length;
}