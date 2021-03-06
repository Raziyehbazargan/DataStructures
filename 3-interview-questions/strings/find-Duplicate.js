// How to print duplicate characters from string?
//example if String is "Java" then program should print "a".

'use strict';

function findDuplicate(str) {
  var counter = 1;
  var hashTable = {};
  var result = [];

  for (var i = 0 ; i < str.length; i++) {
    if (hashTable.hasOwnProperty(str[i])) {
      hashTable[str[i]] = hashTable[str[i]] + 1;
    } else {
      hashTable[str[i]] = counter;
    }
  }

  for (var key in hashTable) {
    if ( hashTable[key] > 1)
      result.push(key);
  }
  return result;
}
