function Node(data, left, right) {
  this.value = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
}

function show() {
  return this.value;
}

function insert(data) {
  let node = new Node(data, null, null);

  if (this.root == null) {
    this.root = node;
    return;
  }

  let current = this.root, parent;
  while (current !== null) {
    parent = current;
    if (data < current.value) {
      current = current.left;
      if (current == null) {
        parent.left = node;
        return;
      }
    } else {
      current = current.right;
      if (current == null) {
        parent.right = node;
        return;
      }
    }
  }
}

function inOrder(node) {
  if (node == null ) return null;
  inOrder(node.left);
  this.show();
  inOrder(node.right);
}
function preOrder(node) {
  if (node == null ) return null;
  this.show();
  inOrder(node.left);
  inOrder(node.right);
}
function postOrder(node) {
  if (node == null ) return null;
  inOrder(node.left);
  inOrder(node.right);
  this.show();
}
function getMin() {
  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.value;
}
function getMax() {
  let current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.value;
}
function find(data) {
  let current = this.root;
  while (current.value !== data) {
    if (data < current.value) {
      current = current.left;
    } else {
      current = current.right;
    }

    if (current == null) return null;
  }
  return current;
}
function removeNode(node, data) {

  if (node == null) return null;

  if (data < node.value) {
    node.left = removeNode(node.left, data);

  else if (data > node.value)  {
    node.right = removeNode(node.right, data);
  }

  else if (node.value == data) {

    //case-1: no childeren
    if (!node.left && !node.right) {
      node = null;
      return node;
    }
    //case-2: has one child ( Left or Right)
    if (!node.left) {
      node = node.right;
      return node;
    }
    else if (!node.right) {
      node = node.left;
      return node;
    }

    //case -3:  has two childeren
    else {
      let temp = getMin(node.right);
      node.value = temp.value;
      node.right = removeNode(node.right, temp.value);
    }
    return node;
}
