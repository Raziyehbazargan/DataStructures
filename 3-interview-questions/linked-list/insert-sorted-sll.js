module.exports = function insertInSortedSLL(head, node) {
  if (head == null) {
    head = node;
    return;
  } else if (node.data < head.data) {
    node.next = head;
    head = node;
    return;
  } else {
    let prev = null, current = head;
    while (current.next != null && current.data < node.data) {
      prev = current;
      current = current.next;
    }
    prev.next = node;
    node.next = current;
    return;
  }

  while(currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
  }
  head = prev;
  return head;
}
