// reverse a SLL : extra space is not allowed

module.exports = function reverseSingly(head) {
  var prev = null,
      nextNode = null,
      currentNode = head;

  while(currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = nextNode;
  }
  head = prev;
  return head;
}
