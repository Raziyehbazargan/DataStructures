/*
Given a string "This is a string" reverse char in every word
input: "This is a string"
output: "sihT si a gnirts"
*/

function reverseEachWord(str) {
  let reverseStr ='';
  let word = '';
  let i = 0;
  let n = str.length;

  while (i < n) {
    if (str[i] !== ' ') {
      word += str[i];
      i++;
    }
    if (i === n || str[i] === ' ' ) {
      for (let j = word.length - 1; j >= 0; j--) {
        reverseStr += word[j];
      }

      reverseStr += ' ';
      word = '';
      i++;
    }
  }
  
  return reverseStr.trim();
}
