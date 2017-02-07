'use strict';

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


