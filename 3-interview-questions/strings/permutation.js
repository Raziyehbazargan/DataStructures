// How to find all permutations of String?
// the if input is "xyz" then it should print "xyz", "yzx", "zxy", "xzy", "yxz", "zyx".

function permutation(perm, word) {
  var result = [];
  if (word.length <= 2) {
    result.push(perm + word);
  }

  for (var i = 0 ; i < word.length; i++) {
    permutation(perm + word.charAt(i) , word.substring(0, i) + word.substring(i + 1, word.length));
  }

  return result;
}

//
// static void printPermutationStrings(String str, String prefix){
// if(str == null || str.length() < 2){
// return;
// }
//
// if(str.length() == 2){
// System.out.println(prefix + str);
// System.out.println(prefix + new StringBuffer(str).reverse().toString());
// }
//
// for(int i=0; i < str.length(); i++){
// char c = str.charAt(i);
// String s2 = "";
// for(int j = 0; j < str.length(); j++){
// if(i != j){
// s2 += str.charAt(j);
// }
// }
// printPermutationStrings(s2, prefix + c);
// }
