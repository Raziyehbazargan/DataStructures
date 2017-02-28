'use strict';

var Stack = require('../stack/implementation/stack/stack-1');

//factorail 5! = 5 * 4 * 3 * 2 * 1 = 120
// using recursive function

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

// without recursive function
/*

function factorial(n) {
  var result = 1;
  var s = new Stack();
  while (n > 1) {
    s.push(n--);
  }

  while (!s.isEmpty()) {
    result *= s.pop();
  }
  return result;
}
*/
