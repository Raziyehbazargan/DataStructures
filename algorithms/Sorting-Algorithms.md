## Divide and Conquer:

is an algorithmic paradigm. A typical Divide and Conquer algorithm solves a problem using following three steps.

1. Divide: Break the given problem into subproblems of same type.
2. Conquer: Recursively solve these subproblems
3. Combine: Appropriately combine the answers

---

Following are some standard algorithms that are Divide and Conquer algorithms.

1- Binary Search
2- Quick Sort
3- Merge Sort

Following are some standard algorithms that are Divide and Conquer algorithms.

### 1- Merge Sort:
	- worst case running time:  O(nlogn)
	- space complexity

### 2- Quick Sort: 
	- Average case running time:  O(nlogn)
	- Worst case running time:  O(n^2)
	
	
 
select the good sorting algorithm depends on details of the application and implementation.

Quick sort is space constant where Merge sort depends on the structure you're sorting.

Quicksort is in place. You need very little extra memory. Which is extremely important.


Depending on the data structure and type of input, both perform differently.

Quick Sort is preferred for arrays and merge Sort for linked lists because in arrays, we can do random access as elements are continuous in memory. 

Unlike arrays, we can not do random access in linked list. Quick Sort requires a lot of this kind of access. In linked list to access i’th index, we have to travel each and every node from the head to i’th node as we don’t have continuous block of memory


 ---
  
### Bubble sort:

How does a bubble sort algorithm
work?
Bubble sort algorithms cycle through a list,
analyzing pairs of elements from left to right, or
beginning to end. If the leftmost element in the
pair is less than the rightmost element, the pair
will remain in that order. If the rightmost
element is less than the leftmost element, then
the two elements will be switched. This cycle
repeats from beginning to end until a pass in
which no switch occurs. 

#### advantages:
The bubble sort is a very memory-efficient because all of the ordering occurs within the array or list itself (7). No new memory is

- No new data structures are necessary, for the same reason.

- With a best-case running time of O(n), the bubble sort
is good for testing whether or not a list is sorted or
not. 


#### disadvantages:
The main disadvantage of the bubble sort
method is the time it requires. With a running
time of O(n^2), it is highly inefficient for large
data sets.