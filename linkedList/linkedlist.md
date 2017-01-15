[Introduction to Linked Lists](arrays_and_lists.pdf)

Linked List is a linear data structure and it is very common data structure which consists of group of nodes in a sequence which is divided in two parts. 
Each node consists of its own data and the address of the next node and forms a chain. Linked Lists are used to create trees and graphs.

each linked list has:
- Head
- Pointer
- Data

![linked list](http://www.studytonight.com/data-structures/images/linked-list-1.png)

---

### Advantages of Linked Lists

- They are a dynamic in nature which allocates the memory when required.

- Insertion and deletion operations can be easily implemented.

- Stacks and queues can be easily executed.

- Linked List reduces the access time.

--- 

### Disadvantages of Linked Lists

- The memory is wasted as pointers require extra memory for storage.
- No element can be accessed randomly; it has to access each node sequentially.
- Reverse Traversing is difficult in linked list.

---

### Applications of Linked Lists

- Linked lists are used to implement stacks, queues, graphs, etc.
- Linked lists let you insert elements at the beginning and end of the list.
- In Linked Lists we don’t need to know the size in advance.

---

### Operations:
- PushFront(key) : add to front -  O(1)
- TopFront() : return front item -  O(1)
- PopFront()  : remove front item -  O(n)

- PushBack(key) : add to back  ( also known ad Append) -  O(n) --> PushBack with tail O(1)
- TopBack() : return back item -  O(n) --> PopBack with tail O(n)
- PopBack()  : remove back item --> O(n)

- Find(key) : is key in list? --> O(n)
- Erase(Key) : remove key from list --> O(n)
- Empty() : is list empty or not? --> O(1)

- AddBefore(Node , Key) : adds node before Node  --> O(n)
- AddAfter(Node , Key)  : adds node after Node  --> O(1)

---

### Types of Linked Lists

**Singly Linked List :**
Singly linked lists contain nodes which have a data part as well as an address part i.e. next, which points to the next node in sequence of nodes. The operations we can perform on singly linked lists are insertion, deletion and traversal.

![singlylist](http://www.studytonight.com/data-structures/images/linked-list-linear.png)


**Doubly Linked List :**
In a doubly linked list, each node contains two links the first link points to the previous node and the next link points to the next node in the sequence.

![doublelinkedlist](http://www.studytonight.com/data-structures/images/linked-list-double.png)


Each Node in Doubly Linked List has:

- Key (data)
- Prev Pointer
- Next Pointer

### Operations:
- PushFront(key) : add to front -  O(1)
- TopFront() : return front item -  O(1)
- PopFront()  : remove front item -  O(n)

- PushBack(key) : add to back  ( also known ad Append) -  O(n) --> PushBack with tail O(1)
- TopBack() : return back item -  O(n) --> PopBack with tail O(n)
- PopBack()  : remove back item --> O(1)

- Find(key) : is key in list? --> O(n)
- Erase(Key) : remove key from list --> O(n)
- Empty() : is list empty or not? --> O(1)

- AddBefore(Node , Key) : adds node before Node  --> O(1)
- AddAfter(Node , Key)  : adds node after Node  --> O(1)


**Circular Linked List :**
In the circular linked list the last node of the list contains the address of the first node and forms a circular chain.

![circularlist](http://www.studytonight.com/data-structures/images/linked-list-circular.png)

---

### summary

- Constant time to insert at or remove from the front. (unlike array)
- with tail and doubled- linked, also constant time to insert at or remove from the back.
- O(n) time to find arbitrary element.
- List elements need not to be  contiguous. we have sepreated allocated location in the memory.
- with doubled- linked,  constant time to insert between nodes or remove a node.
 
 ---
 
[reference](http://www.studytonight.com/data-structures/introduction-to-linked-list)




