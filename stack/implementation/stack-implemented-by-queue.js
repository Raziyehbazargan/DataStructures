'use strict';
//Implementation Stack using Queue in JavaScript

function Queue() {
  this.queue = [];
}

Queue.prototype.push = function(data) {
  //var queueSize = this.queue.length;
  this.queue.push(data);

  for (var i = 0; i < this.queue - 1; i++) {
    this.queue.push(this.queue.shift());
  }
};

Queue.prototype.pop = function() {
  if (this.queue.length)
    return this.queue.shift();

  return 'the Queue is empty';
};
