/* Remove spaces from a given string in O(n) running time and only one traversal of a string.
Input: “I love ice cream”
Output: “Iloveicecream”
*/

function removeSpace(str) {
  let wordNoSpace = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      wordNoSpace+= str[i]
    }
  }
  return wordNoSpace;
}
