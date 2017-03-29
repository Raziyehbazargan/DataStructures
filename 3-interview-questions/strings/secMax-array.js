//return second max in the array
function findSecMax(arr) {
  if (arr.length === 0 ) return 'array is empty';

  var max = arr[0], secoundMax = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secoundMax = max;
      max = arr[i];
    } else if (arr[i] > secoundMax) {
      secoundMax = arr[i];
    }
  }
  return secoundMax;
}
