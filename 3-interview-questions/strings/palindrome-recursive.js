'use strict';

function isPalindrome(str, start, end) {

  if (start === end)
    return true;

  if (str[start] !== str[end])
    return false;

  if (s < e)
    return isPalindrome(str, s + 1, e - 1);

  return true;
}


//https://repl.it/Hf3H/5
