// 173. Binary Search Tree Iterator

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  let ret = [];
  inorder(root, ret);
  this.tmp = ret;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if ( this.hasNext() ) {
    return this.tmp.shift();
  }
  return null;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.tmp.length !== 0 ? true : false;
};

var inorder = function(root, ret) {
  if ( root === null ) return null;

  inorder(root.left, ret);
  ret.push(root.val);
  inorder(root.right, ret);
}
