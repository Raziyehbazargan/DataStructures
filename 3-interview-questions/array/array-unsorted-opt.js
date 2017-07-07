'use strict';

// in Sorted array for search we can use BS (Binary Search)
function search(value, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

function insert(value, arr) {
  arr[arr.length] = value; // or in JS we can use buit-in method like: arr.push(n);
  return arr;
}

function deleteValue(value, arr) {
  if (arr.length == 0)  return 'array is empty';
  let value_index = search(value);

  if (value_index === -1) return 'Not found';

  for (var i = value_index; i < arr.length ; i++) {
    arr[i] = arr[i + 1];
  }

  return arr;
}
