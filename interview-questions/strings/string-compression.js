//example if String is "aabcccccaaa" then program should print "a5b1c5".

'use strict';

function stringCompression(str) {
  var counter = 1;
  var hashTable = {};
  var result = '';

  if(result.length > str.length) return str;

  for (var i = 0 ; i < str.length; i++) {
    if (hashTable.hasOwnProperty(str[i])) {
      hashTable[str[i]] = hashTable[str[i]] + 1;
    } else {
      hashTable[str[i]] = counter;
    }
  }

  for (var key in hashTable) {
    result += key + hashTable[key];
  }
  return result;
}
