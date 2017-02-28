'use strict';

var Stack = require('../stack/implementation/stack/stack-2');

function palindrome(word) {
  var stack = new Stack();

  for (var i = 0; i < word.length; i++) {
    stack.stack.push(word[i]);
  }

 var reverseWord = stack.stack.pop();
  while(!stack.isEmpty()) {
    reverseWord += stack.stack.pop();
  }

  return (word === reverseWord)? true : false;
}
