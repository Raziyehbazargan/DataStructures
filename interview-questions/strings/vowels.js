// How to count number of vowels and consonants in a String?

function vowelCount(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var counter = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter += 1;
    }
  }
  return counter;
}
