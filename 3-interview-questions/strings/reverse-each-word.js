//Given a string "This is a string" reverse its characters "gnirts a si siht"

function reverseEachWord(str) {
  let reverseSentence = '';
  let word = '';
  for (var i = str.length - 1; i >= 0 ; i--) {
     word += str[i];
  }
  return reverseSentence += word;
}
