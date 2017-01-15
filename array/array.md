## Array: (FIFO : FIRST IN - FIRST OUT)

- Arrays are a fundamental data structure, and they are extremely useful!
- We use arrays to hold values of the same type at contiguous memory locations.
- One way to analogize the notion af array is to think of your local post office, which usually has a large bank of post office boxes.

- The elements of an array indexed starting from 0 and the last element is (array.length-1).
- Array is contiguous area of memory consisting of equal-size elements indexed by contiguous integers.

- constant time asscess to any paticular element in an array.
- and constant time access to read.
- and constant time access to write.

#### Constant time access :
 - array_addr + elem_size * (i- first_index)

---

## Multi Dimensioal Array:
n : row
m : column

#### Constant time access :
 - array_addr + ( elem_size * ((n-1) * 6 + (m-1)) )


### Times for common operations:

- Beginnng :     add : O(n)  -   remove : O(n)
- End :			 add : O(1)  -   remove : O(1)
- Middle : 		 add : O(n)  -   remove : O(n)

### Summary:

- contiguous area of memory consisting of equal-size elements indexed by contiguous integers.
- constant time access to any element.
- constant time to add/remove  at the end.
- Linear time to add/remove at the arbitrary location.