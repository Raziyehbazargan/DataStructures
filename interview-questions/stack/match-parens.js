'use strict';

var Stack = require('../stack/implementation/stack/stack-1');

function isMatchParens(exp) {
  var s  = new Stack();
  var output = [];

  for (var i = 0; i < exp.length; i++) {
    if (exp[i] === '(') s.stack.push(i);
    if (exp[i] === ')') s.stack.pop();
  }

  if (!s.isEmpty()) {
    while (s.stack.length > 0) {
      output.push(s.stack.pop());
    }
    return output.toString();
  }
  return false;
}