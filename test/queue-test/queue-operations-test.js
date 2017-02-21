'use strict';

var expect = require('chai').expect;
var Queue = require('../../queue/implementation/queue.js');

describe('#queue operations', function() {
  var q;

  beforeEach(function() {
    q = new Queue();
    q.enqueue('A');
    q.enqueue('B');
    q.enqueue('C');
  });

  describe('#enqueue', function() {
    it('it should return a queue with three items', function() {
      expect(q.queue).to.include('A');
    });
  });

  describe('#dequeue', function() {
    it('#it should remove one item from queue', function() {
      q.dequeue();
      expect(q.queue).to.not.include('A');
    });
  });

  describe('#queueSize', function() {
    it('#it should return length of queue', function() {
      expect(q.queue).length.to.be(3);
    });
  });
});
