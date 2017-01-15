function reverseSingly(head) {
  var prev = null;
  while(head.next) {
    var next = head.next;
    head.next = prev;
    prev = head;
    head = next
  }
  head.next = prev;
  return head;
}
