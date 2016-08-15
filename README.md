# DataStructures
DataStructures Summary

---

1- Arrays 
	- Insertion is bad - lots of shifting to fit an elemnt in the middle ( Insertion in the end of array is OK ).
	- Deletion is bad - lots of shifting after removing an elemnt 
	- Lookup is great - random access, constant time.
	- Great at Sorting.
	- Relatively small size-wise
	- Stuck with a fixed size, no flexibiloty

2- Linked Lists 
	- Insertion is easy - just tack onto the front
	- Deletion is easy - once you find the element
	- Lookup is bad - have to rely on linear search
	- Relatively difficult to Sort - unless you are willing to compromise on super-fast insertion and instead sort as you construct.
	- Relatively small size-wise ( not as small as arrays)
	
3- Hash Tables
	- Insertion is two-step process -hash, then add
	- Deletion is easy - once you find the element
	- Lookup is on average better than with linked lists because you have the benefit of a real-world constant factor. ( lookup is astill linear search f you're using chaining)
	- Not an ideal data structure if sorting is the goal - just use an array
	- Can run the gamut of size.
	
3- Tries
	- Insertion is complex - a lot of dynamic memory allocation, but gets easier as you go
	- Deletion is easy - once free a node
	- Lookup is fast - not quite as fast as an array, but almost
	- Already sorted - sorts as you build n almost all situations
	- Rapidly becomes huge, even with very little data present, not great, not great if space is at a premium.