Array vs. Linked List

---

There is no such thing as one data structure is better than another data structure. one data structure maybbe really good for one kind of requirement, while another data structure can be good for another requirement.

It all depends upon factor like: what is the most frequent operation that you want to perform with the data structure or what is the size of the data and there can be other factors as well.

---

Compare two data structures : Array and Linked List base on some parameters, based on the cost of operations that we have with these data structures:


### Cost of accessing an element : 

- Array:
	- **Cost of accessing an element**: O(1)
	
	irrespective of the size of an array, it takes constant time to access an element in the array. 
	This is because an array is stored as one contiguous block of memory. 
	
- Linked List:
	- **Cost of accessing an element**: O(1)
	
	- In the average case, we will be accessing the middle element maybe. So if the **n** is the size of linked list, then we will traverse n/2 elements. 
	
	So in average case, the time complexity is : **O(n)**
	In a Linked List, data is not stored in a contiguous block of memory. we have multiple blocks of memory at diffrent addresses. 
	Each block in the linked list is called a Node and each Node has two fields: data and pointer(linked field).
	to access an element in the linked list at a particular position, we first need to start at the Head Node or the first Node, the we go to the second Node and see the address of the second Node , etc.
	
	In the Worst case, to access the last element in the list, we will be traversing all the elements in the list.
	
	
	***Result : if you have a requirement where you want to access elements in the list all the time: Array is a better choice.***
	

	
### Cost of Memory Requirements : 
- Array:
	- In array we need to know the size of array before creating it, because arrays is created as one congiguous block of memory. Array is fixed size. what we do is, we create a large size of array, array stores our list and some part of the array is vacant or empty. So we have Unused memory.

- Linked List:
	- No unused memory
	- we use extra memory for pointer variables.
	
	
### Cost of Insertion and Deletion: 
- Array:
	- Inserting at the beginning of the array: we need to shift all elements --> O(n)
	
	- Inserting at the end of the array:  if array is not full --> O(1) and if array is full we need to create a new array and copy all the content to new array that will take O(n) time.
	
	- Inserting at the i position of the array:  in average case --> O(n)

- Linked List:
	- Inserting at the beginning of the list: we need to just create a new Node and adjusting the head pointer to new node so time taken it is not depending on list size --> O(1)
	
	- Inserting at the end of the list:  we need to traversing whole list and then creating a new Node and adjusting the links.  -->  O(n) 
	
	- Inserting at the i position of the list:  in average case --> O(n)
	
	
	### Ease of use : 
	
	  - Array is a lot easier to use.