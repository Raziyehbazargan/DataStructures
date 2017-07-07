/*
input: I love programming
output: programming love I
*/

function reverseEachWord(str) {
  let reverseStr ='';
  let word = '';

  for (let i = 0; i < str.length; i ++) {
    if (str[i] !== ' ') {
      word += str[i];
    }

    if (i === str.length - 1 || str[i] === ' ') {
      reverseStr = word + ' ' + reverseStr;
      word = '';
    }
  }

  return reverseStr.trim();
}
