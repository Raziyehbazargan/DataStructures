'use strict';

/* The algorithm for Quicksort is:
1. Pick a pivot element that divides the list into two sublists.
2. Reorder the list so that all elements less than the pivot element are placed before
the pivot and all elements greater than the pivot are placed after it.
3. Repeat steps 1 and 2 on both the list with smaller elements and the list of larger
elements.
*/

function quickSort(arr) {
  if (arr.length === 0) return [];
  let lesser = [], greater = [], pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater));
}
