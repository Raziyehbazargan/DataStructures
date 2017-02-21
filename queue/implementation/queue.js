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

module.exports = Queue;
