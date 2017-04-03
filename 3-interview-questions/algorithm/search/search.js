/*
Find the element that appears once in a sorted array where all other elements appear twice one after another. Find that element in 0(logn) complexity.
Input: arr[] = {1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8}
Output: 4
*/

function searchElement(arr, low, high) {
  if (low > high)
     return arr[low];

  if (low == high) {
     return arr[low];
  }

  let mid  = Math.floor((low + high) / 2);  // Find the middle point
  if (mid % 2 === 0) {
    if (arr[mid] === arr[mid + 1]) {
      searchElement(arr, mid + 2, high)
    } else {
      searchElement(arr, low, mid)
    }
  } else {
    if (arr[mid] === arr[mid - 1]) {
      searchElement(arr, mid - 2, high)
    } else {
      searchElement(arr, low, mid - 1)
    }
  }
}
