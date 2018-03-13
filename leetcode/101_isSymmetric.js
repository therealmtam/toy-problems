/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    return isMirror(root.left, root.right);
};

const isMirror = (node1, node2) => {
    if (node1 === node2) return true;
    if (!node1 || !node2) return false;
    return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
};
