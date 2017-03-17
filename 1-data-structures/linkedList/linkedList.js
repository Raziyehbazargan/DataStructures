'use strict';

function LinkedList() {
  this.size = 0;
  this.head = null;
}

LinkedList.prototype.add = function (data) {
		//create a new node
		//current :used to traverse the structure
  var node = { data: data, next: null}, current;

  if (this.head === null) {
    this.head = node;
  } else {
    current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

		//don't forget to update the count
  this.size += 1;
};

LinkedList.prototype.item = function(index){

        //check for out-of-bounds values
  if (index > -1 && index < this.size){
    var current = this.head,
      i = 0;

    while (i++ < index){
      current = current.next;
    }

    return current.data;
  } else {
    return null;
  }
};

LinkedList.prototype.remove = function(index) {
	//check for out-of-bounds values
  if (index > -1 && index < this.size){
    var current = this.head,
      previous,
      i = 0;

		//special case: removing first item
    if (index === 0) {
      this.head = current.next;
    } else {

			//find the right location
      while(i++ < index) {
        previous = current;
        current = current.next;
      };

			//skip over the item to remove
      previous.next = current.next;
    }

		//decrement the length
    this.size -= 1;

		//return the value
    return current.data;

  } else {
    return null;
  }
};
