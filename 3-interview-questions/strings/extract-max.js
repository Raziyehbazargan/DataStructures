/*
Extract maximum numeric value from a given string
Given an alphanumeric string, extract maximum numeric value from that string. Alphabets will only be in lower case.

Examples:

Input : 100klh564abc365bg
Output : 564
Maximum numeric value among 100, 564
and 365 is 564.

Input : abchsd0sdhs
Output : 0
*/
function findMax(num1, num2) {
  let max = 0;
  if (num1 > num2) {
    max = num1;
  }
  return max;
}

function extractMax(str) {
  let num = 0, max = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      num = num * 10 + (str[i] - '0');
    } else {
      max = findMax(num, max)
      num = 0;
    }

    if (i == str.length - 1) {
      max = findMax(num, max)
    }
  }
  return max;
}
