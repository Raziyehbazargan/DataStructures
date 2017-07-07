function Node(data, left, right) {
  this.value = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function BST() {
  this.root = null;
  this.insert = insert;
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
