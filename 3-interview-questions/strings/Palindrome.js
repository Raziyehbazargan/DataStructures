// check if String is Palindrome

function palindrome(word) {
  if (word === reverse(word))
    return true;
  return false;
}

//using for loop
// function reverse(word) {
//   if (word === null || word.length < 2)
//     return word;
//
//   var reverseWord = word.charAt(word.length - 1);
//   for (var i = word.length - 2; i >= 0; i--) {
//     reverseWord = reverseWord.concat(word[i]);
//   }
//   return reverseWord;
// }

//using recursion function
function reverse(word) {
  if (word === null || word.length < 2)
    return word;
  return (word.charAt(word.length - 1) + reverse(word.substring(0, word.length - 1)));
}
