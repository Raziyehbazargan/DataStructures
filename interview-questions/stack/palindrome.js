'use strict';

var Stack = require('../stack/implementation/stack/stack-2');

function palindrome(word) {
  var isPalindrome = true;
  var stack = new Stack();

  var mid = (((word.length) / 2 ) == 0 ) ? word.substring(0, word.length / 2) : Math.floor(word.length / 2);
  for (var i = 0; i < mid; i++) {
    stack.stack.push(word[i]);
  }

  while(!stack.isEmpty()) {
    if (stack.stack.pop() === word[mid + 1]) {
      mid++;
    } else return isPalindrome = false;;
  }
  return isPalindrome;
}