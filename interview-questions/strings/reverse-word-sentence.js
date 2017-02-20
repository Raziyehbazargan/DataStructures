//reverse words in a sentence without using library method
function reverseSentence(str) {
  var words = str.split(' ');
  var result = '';

  for (var i = words.length - 1; i > 0; i--) {
    result += words[i] + ' ';
  }
  return result;
}
