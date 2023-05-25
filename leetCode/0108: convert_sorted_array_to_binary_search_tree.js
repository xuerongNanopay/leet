// 108. Convert Sorted Array to Binary Search Tree

var sortedArrayToBST = function(nums) {
  
  const doBuild = (nums, l, r) => {
    if ( r < l )  return null;
    if ( l == r ) return new TreeNode(nums[l])

    const m = l + Math.trunc((r-l)/2)

    let node = new TreeNode(nums[m]);
    node.left = doBuild(nums, l, m-1);
    node.right = doBuild(nums, m+1, r);
    return node
  }

  return doBuild(nums, 0, nums.length-1)
};