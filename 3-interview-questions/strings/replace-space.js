//Write a method to replace all spaces in a string with ‘%20’.
function replaceSpace(str) {
  // for (var i = 0; i < str.length; i++) {
  //   if (str[i] === ' ') {
  //     str[i] = '%20';
  //   }
  // }
  return str.split(' ').join('%20');
}
