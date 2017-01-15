function reverseString(text) {
  var result = '';
  for( var i=text.length-1; i>=0; i--) {
    result += text[i];
  }
  return result;
}
