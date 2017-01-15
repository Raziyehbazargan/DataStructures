// How to print duplicate characters from string?

'use strict';

function findDuplicate(str) {
  var counter = 1;
  var hashTable = {};

  for (var i = 0 ; i < str.length; i++) {
    if (hashTable[str[i]]) {
      hashTable[str[i]] = counter++;
    } else {
      hashTable[str[i]] = counter;
    }
  }
  return hashTable;
}
