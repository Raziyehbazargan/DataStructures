'use strict';

// in Sorted array for search we can use BS (Binary Search)
function searchBST(value, arr) {
  let low = 0; high = arr.length - 1, mid;

  if (high < low)  return -1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (value === mid) return mid; // we return index
    else if (value < mid) high = mid - 1;
    else low = mid + 1;
  }

  return -1; // not found
}

function insert(value, arr) {
  for (let i = arr.length - 1; (arr[i] > value && i >= 0) ; i--) {
    arr[i + 1] = arr[i];
  }
  arr[i + 1] = value;
  return arr;
}

function deleteValue(value, arr) {
  if (arr.length == 0)  return 'array is empty';
  let value_index = searchBST(value);

  if (value_index === -1) return 'Not found';

  for (var i = value_index; i < arr.length ; i++) {
    arr[i] = arr[i + 1];
  }

  return arr;
}
