'use strict';
//1- select the lowest element n the remaining array
//2- bring it to the starting position
//3- change the ounter for unsorted array by one
// Time Complexity: O(n2) as there are two nested loops.
// Auxiliary Space: O(1)

function selectionSort(arr) {
  var i,j, minIndex, maxIndex;
  for (i = 0; i < arr.length; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr,i,minIndex);
  }
  return arr;
}

function swap(arr, i, minIndex) {
  var temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
};
