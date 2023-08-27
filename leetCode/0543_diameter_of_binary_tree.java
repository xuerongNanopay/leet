//543. Diameter of Binary Tree

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
  private int result = 0;

  public int diameterOfBinaryTree(TreeNode root) {
      this.result = 0;
      search(root);
      return this.result-1;
  }

  private int search(TreeNode root) {
      if ( root == null ) return 0;

      int left = search(root.left);
      int right = search(root.right);
      int cur = 1 + left + right;
      if ( cur > this.result ) this.result = cur;

      return left > right ? 1 + left : 1 + right;
  }
}