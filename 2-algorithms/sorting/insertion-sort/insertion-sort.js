'use strict';

function insertionSort(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    var value = arr[i];
    var temp = i;
    while (temp > 0 && arr[temp - 1] > value) {
      arr[temp] = arr[temp - 1];
      temp = temp - 1;
    }
    arr[temp] = value
  }
}
