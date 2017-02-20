'use strict';
//Implementation Queue using linked list in JavaScript

function Node(data) {
<<<<<<< HEAD:queue/queueImpByLinkedList.js
  this.data = data;
  this.next = null;
}

function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function (data) {
  var newNode = new Node(data);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
=======
	 this.data = data;
	 this.next = null;
}

function Queue() {
	 this.head = null;
	 this.tail = null;
}

Queue.prototype.enqueue = function (data) {
	var newNode = new Node(data);

	if (this.head === null) {
		this.head = newNode;
		this.tail = newNode;
	} else {
		this.tail.next = newNode;
		this.tail = newNode;
	}
>>>>>>> c59a0c71861b98ef7a50e332a388dbca89f2df27:queue/implementation/queueImpByLinkedList.js
};

Queue.prototype.dequeue = function () {
  var delNode;
  if (this.head !== null) {
    delNode = this.head.data;
    this.head = this.head.next;
  }
  return delNode;
};
