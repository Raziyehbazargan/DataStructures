Stacks
Stack is an abstract data type with a bounded(predefined) capacity. It is a simple data structure that allows adding and removing elements in a particular order. 

Every time an element is added, it goes on the top of the stack, the only element that can be removed is the element that was at the top of the stack, just like a pile of objects.

![stack](http://www.studytonight.com/data-structures/images/stack-data-structure.png)


### Basic features of Stack
1- Stack is an ordered list of similar data type.

2- Stack is a LIFO structure. (Last in First out).

3- push() function is used to insert new elements into the Stack and pop() is used to delete an element from the stack. Both insertion and deletion are allowed at only one end of Stack called Top.

4- Stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if it is completely empty.


### Applications of Stack

The simplest application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.

There are other uses also like : Parsing, Expression Conversion(Infix to Postfix, Postfix to Prefix etc) and many more.

---

### Implementation of Stack

Stack can be easily implemented using an Array or a Linked List. Arrays are quick, but are limited in size and Linked List requires overhead to allocate, link, unlink, and deallocate, but is not limited in size. Here we will implement Stack using array.

![stack](http://www.studytonight.com/data-structures/images/stack-implementation.png)


```

function Stack() {
	this.stack = [];
}

Stack.prototype.push = function (item) {
	this.stack.push(item);
};

Stack.prototype.pop = function () {
	this.stack.pop();
};

Stack.prototype.peek = function () {
	return this.stack[this.stack.length - 1];
};

Stack.prototype.isEmpty = function () {
	return this.stack.length === 0;
};


```

---


Position of Top :   Status of Stack

-1	                Stack is Empty
0	                Only one element in Stack
N-1	                Stack is Full
N	                Overflow state of Stack


---

### Analysis of Stacks

Push Operation : O(1)
Pop Operation : O(1)
Top Operation : O(1)
Search Operation : O(n)

---
[reference](http://www.studytonight.com/data-structures/stack-data-structure)

