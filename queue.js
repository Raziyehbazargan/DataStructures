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


//----------------------------------------------------------
//Implementation Queue using linked list in JavaScript

//function Node(data){
//	this.data = data;
//	this.next = null;
//}
//
//function Queue(){
//	this.head = null;
//	this.tail = null;
//}
//
//Queue.prototype.enqueue = function(data){
//	var newNode = new Node(data);
//	
//	if(this.head === null){
//		this.head = newNode;
//		this.tail = newNode;
//	}else{
//		this.tail.next = newNode;
//		this.tail = newNode;
//	}
//}
//
//Queue.prototype.dequeue = function(){
//	var delNode;
//	if(this.head != null){
//		delNode = this.head.data;
//		this.head = thi.head.next;
//	}
//	return delNode;
//}
