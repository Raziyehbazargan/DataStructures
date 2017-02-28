'use strict';

var Stack = require('../stack/implementation/stack/stack-2');

function palindrome(word) {
  var stack = new Stack();

  var mid = ((word.length % 2 ) === 0 ) ? (word.length / 2) - 1 : Math.floor(word.length / 2);
  for (var i = 0; i < mid; i++) {
    stack.stack.push(word[i]);
    console.log(stack.stack);
  }

  while(!stack.isEmpty()) {
    var data = stack.stack.pop();
    console.log(data);
    if ( data !== word[mid + 1]) {
      return false;
    }
  }
  return true;
}
