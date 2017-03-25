/* return length of last word?
- needs to validate
- punctuations (? ! . ' ) not word
- Asscii string
- Assume that we have a punctuation function() to check if string valid or not

*/

'use strict';

function lastWordLen(str) {
  let lengthOfLastWord = 0;
  let lengthOfCurrentWord = 0;
  let isValidWord = false;

  if (str.length === 0 ) return 'no string';

  for (var i = 0; i < str.length ; i++) {
    if (str[i] === ' ') {
      if (isValidWord)
        lengthOfLastWord = lengthOfCurrentWord;
    lengthOfCurrentWord = 0;
    isValidWord = false;
    } else {
      if (!isValidWord && !isValidPunctuation(str[i]))
        isValidWord = true;
        lengthOfCurrentWord ++;
    }
  }
  if (isValidWord)
    return lengthOfCurrentWord;
  else
    return lengthOfLastWord;
}

function isValidPunctuation(ch) {
  if (ch === ' ' || ch === ',' || ch === '?')
     return true;
  return false;
}
