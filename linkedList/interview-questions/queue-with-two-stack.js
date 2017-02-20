function TwoStackQueue() {
  this.stack1 = [];
  this.stack2 = [];
}

TwoStackQueue.prototype.push = function(value) {
  this.stack1.push(value);
};

TwoStackQueue.prototype.pop = function() {
  if(!stack2.length) {
    if(!stack1.length)
      return false;
  }

  while(this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.pop();
};
