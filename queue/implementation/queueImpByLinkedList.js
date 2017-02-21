'use strict';
//Implementation Queue using linked list in JavaScript

function Node(data) {
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
};

Queue.prototype.dequeue = function () {
  var delNode;
  if (this.head !== null) {
    delNode = this.head.data;
    this.head = this.head.next;
  }
  return delNode;
};
