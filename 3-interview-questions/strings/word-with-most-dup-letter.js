'use strict';

function mostDup(arr) {
  var map = {},
    maxCount = 1,
    newStr = arr.split(' '),
    letter, highest = newStr[0];

  for (var i = 0; i < newStr.length; i++) {
    map = {};
    if (newStr[i].length <= maxCount) continue;
    for (var j = 0; j < newStr[i].length; j++) {
      letter = newStr[i][j];
      if (map[letter]) {
        map[letter]++;
        if (map[letter] > maxCount) {
          maxCount = map[letter];
          highest = newStr[i];
        }
      } else {
        map[letter] = 1;
      }
    };
  }
}
