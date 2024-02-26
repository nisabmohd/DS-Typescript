export class TreeNode<T> {
  public val: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;
  constructor(val: T, left?: TreeNode<T>, right?: TreeNode<T>) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export class BinaryTree {
  public static inOrder<T>(node: TreeNode<T> | null): T[] {
    const ans: T[] = [];
    if (!node) return ans;
    ans.push(...this.inOrder(node.left));
    ans.push(node.val);
    ans.push(...this.inOrder(node.right));
    return ans;
  }

  public static preOrder<T>(node: TreeNode<T> | null): T[] {
    const ans: T[] = [];
    if (!node) return ans;
    ans.push(node.val);
    ans.push(...this.preOrder(node.left));
    ans.push(...this.preOrder(node.right));
    return ans;
  }

  public static postOrder<T>(node: TreeNode<T> | null): T[] {
    const ans: T[] = [];
    if (!node) return ans;
    ans.push(...this.postOrder(node.left));
    ans.push(...this.postOrder(node.right));
    ans.push(node.val);
    return ans;
  }
}
