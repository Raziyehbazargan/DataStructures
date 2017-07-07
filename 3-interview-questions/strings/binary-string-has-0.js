/*Check if a binary string has a 0 between 1s or not
Given a string of 0 and 1, we need to check that the given string is valid or not. The given string is valid when there is no zero is present in between 1’s. For example, 1111, 0000111110, 1111000 are valid strings but 01010011, 01010, 101 are not.

Examples:

Input : 100
Output : VALID

Input : 1110001
Output : NOT VALID
There is 0 between 1s

Input : 00011
Output : VALID
*/

function binaryStringSearch(str) {
  let first = 0, last = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '1') {
      first = i;
      break;
    }
  }
  for (var j = str.length - 1; j > 0 =; j--) {
    if (str[j] == '1') {
      last = j;
      break;
    }
  }

  for (var k = first; k <= last; k++) {
    if (str[k] == '0') return false;
  }
  return true;
}
