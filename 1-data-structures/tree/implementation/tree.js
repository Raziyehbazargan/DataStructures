'use strict';

function BST() {
  this.root = null;
  this.insert = insert;
  this.preOrder = preOrder;
  this.inOrder = inOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
}

function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

function insert(data) {
  let n = new Node(data, null, null);

  if (this.root == null) {
    this.root = n;
    return;
  }

  let current = this.root,
      parent;

  while (true) {
    parent = current;
    if (data < current.data) {
      current = current.left;
      if (current == null) {
        parent.left = n;
        return;
      }
    } else {
      current = current.right;
      if (current == null) {
        parent.right = n;
        return;
      }
    }
  }
}

function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder(node) {
  if (!(node == null)) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
}

function getMin() {
  let current = this.root;
  while (!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}

function getMax() {
  let current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(value) {
  let current = this.root;
  while (current.data !== value) {
    if (value < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if (current == null) {
      return null;
    }
  }
  return current;
}

function remove(data) {
  this.root = removeNode(this.root, data);
}

function removeNode(root, data) {
  if (root === null) return null;

  // data is in the left sub tree.
  if (data < root.data) {
    root.left = removeNode(root.left, data);

  // data is in the right sub tree.
  } else if (data > root.data) {
    root.right = removeNode(root.right, data);
  } else {
    // case 1: no children
    if (root.left == null && root.right == null) {
      root = null;
      return root;
    }
    // case 2: one child (right)
    if (root.left == null) {
      root = root.right;
      return root;
    }

    // case 3: one child (left)
    if (root.right == null) {
      root = root.left;
      return root;
    }

    // case 4: two children
    let tempNode = findMin(root.right);
    root.data = tempNode.data;
    root.right = removeNode(root.right, tempNode.data);
    return root;
  }
  return root;
}

function findMin(node) {
   if (node == null) {
      return null;
   }
   if (node.left != null) {
      return findMin(node.left);
      // left tree is smaller
   }
   return node.data;
}
