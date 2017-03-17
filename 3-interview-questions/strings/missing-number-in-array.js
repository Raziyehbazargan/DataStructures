function findMissing(arr) {
  if (arr.length === 0) return 'array is empty';
  // 1. Get the sum of numbers total = n*(n+1)/2
  var sum = (arr.length + 1) * (arr.length + 2) / 2;

  // 2  Subtract all the numbers from sum and you will get the missing number.
  for (var i = 0; i < arr.length; i++) {
    sum -= arr[i];
  }

  return sum;
}
