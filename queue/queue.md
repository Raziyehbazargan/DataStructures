### Queue:
is also an abstract data type(AST) or a **linear data structure**, in which the first element is inserted from one end called REAR(also called tail), and the deletion of exisiting element takes place from the other end called as FRONT(also called head). 

This makes queue as **FIFO** data structure, which means that element inserted first will also be removed first.


#### Queue Operations and Specifications

---

**enqueue** adds an element to the rear of a queue.

**dequeue** removes and returns the front element of the queue.
![Queue](http://www.studytonight.com/data-structures/images/introduction-to-queue.png)


#### Basic features of Queue
- Like Stack, Queue is also an ordered list of elements of similar data types.

- Queue is a FIFO( First in First Out ) structure.

- Once a new element is inserted into the Queue, all the elements inserted before the new element in the queue must be removed, to remove the new element.

- peek() function is oftenly used to return the value of first element without dequeuing it.

#### Applications of Queue

Queue, as the name suggests is used whenever we need to have any group of objects in an order in which the first one coming in, also gets out first while the others wait for there turn, like in the following scenarios :

- Serving requests on a single shared resource, like a printer, CPU task scheduling etc.

- In real life, Call Center phone systems will use Queues, to hold people calling them in an order, until a service representative is free.

- Handling of interrupts in real-time systems. The interrupts are handled in the same order as they arrive, First come first served.


#### Implementation of Queue

Queue can be implemented using an **Array, Stack or Linked List**. The easiest way of implementing a queue is by using an Array. 

Initially the head(FRONT) and the tail(REAR) of the queue points at the first index of the array (starting the index of array from 0). As we add elements to the queue, the tail keeps on moving ahead, always pointing to the position where the next element will be inserted, while the head remains at the first index.

![implementation Queue](http://www.studytonight.com/data-structures/images/implementation-of-queue.png)


```
'use strict';

//Implementation Simple Queue in JavaScript
//
// enqueue: add new item to the last of array
// dequeue: remove item from the head of array
// peek : return first item in array
//
//Array Methods:
// push: add new item to the last of array 
// shift: remove an item from the head of array
// unshift: add an item to the head of array

function Queue() {
	this.queue = [];
}

Queue.prototype.enqueue = function (item) {
	this.queue.push(item);
};

Queue.prototype.dequeue = function () {
	this.queue.shift();
};

Queue.prototype.queueSize = function () {
	return this.queue.length;
};

Queue.prototype.peek = function () {
	return (this.queue[0] !== null) ? this.queue[0] : null;
};


var x = new Queue();
x.enqueue('razi');



```



### Analysis of Queue
- Enqueue : O(1)
- Dequeue : O(1)
- Size : O(1)

---
[reference](http://www.studytonight.com/data-structures/queue-data-structure)