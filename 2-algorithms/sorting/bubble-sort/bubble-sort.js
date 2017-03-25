// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping t
// the adjacent elements if they are in wrong order.
// first loop executes N pass and second loop executes N/2 times.
// O(n^2)
function bubbleSort(arr) {
  var i,j;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j);
      }
    }
  }
  return arr;
}

function swap(arr, j) {
  var temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
};
