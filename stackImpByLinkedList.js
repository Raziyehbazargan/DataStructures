'use strict';
//Implementation Stack using linked list in JavaScript

function Node(data) {
	this.data = data;
	this.prev = null;
}

function Stack() {
	this.top = null;
	this.size = 0;
}

Stack.prototype.push = function (data) {
	var newNode = new Node(data);
	
	newNode.prev = this.top;
	this.top = newNode;
	this.size += 1;
	
	return this.top;
};

Stack.prototype.pop = function () {
	if (this.top !== null) {
		var item = this.top;
		this.top = this.top.prev;
		this.size -= 1;
		
		return item;
	}
	return null;
};