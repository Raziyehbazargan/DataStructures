'use strict';

function fib(n) {
  var a = 0,
    b = 1,
    c = 1;

  while (n > 0) {
    var result = b + c;
    b = c;
    c = result;
    n --;
  }
  return c;
}
