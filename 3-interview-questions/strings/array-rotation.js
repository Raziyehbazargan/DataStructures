//Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.

// Input:  arr[] = [1, 2, 3, 4, 5, 6, 7]   d = 2
// Output: arr[] = [3, 4, 5, 6, 7, 1, 2]

function rotateArray(arr, d) {
  if (arr.length === 0) return 'array is empty';

  for (var i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
