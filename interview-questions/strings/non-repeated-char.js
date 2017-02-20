// How to program to print first non repeated character from String?
// for Example if given String is "Morning" then it should print "M".

function nonRepeatedChar(str) {
  var count = 1;
  var hashTable = {};

  for (var i = 0; i < str.length; i++) {
    if (hashTable.hasOwnProperty(str[i])) {
      hashTable[str[i]] = hashTable[str[i]] + 1;
    } else {
      hashTable[str[i]] = count;
    }
  }

  for (var key in hashTable) {
    if (hashTable[key] === 1) {
      return key;
    }
  }
}
