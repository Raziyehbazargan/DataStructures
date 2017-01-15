'use strict';

//cracking the Coding Interview

//Question 2.1
// Write code to remove duplicates from an unsorted linked list

function duplicateSll(sll) {
  var prev,
      current;

  if(!sll.head || !sll.head.next) return false; // console.log('no duplicates, list just have 0 / 1 node')

  current = sll.head;
  prev = current;
  current = current.next;

  while(current !== null) {
    if(prev.data === current.next.data)
      prev.next = current.next;

      prev = current;
      current = current.next;
  }
  return sll;
}

//- assume a temporary buffer is not allowed
function duplicateSll(sll) {

  if(!sll.head || !sll.head.next) return false;

  current = sll.head;

  while(current.next !== null) {
    if(current.data === current.next.data)
      current.next = current.next.next;

      current = current.next;
  }
  return sll;
}
