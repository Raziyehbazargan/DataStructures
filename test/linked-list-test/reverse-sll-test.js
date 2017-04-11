'use strict';

var expect = require('chai').expect;
var SLL = require('../../1-data-structures/linked-list/linkedList.js');
var reverseSll = require('../../3-interview-questions/interview-questions/reverse-SLL.js');

describe('#SLL - Reverse without extra space', function() {
  var sll;
  before(() => {
    sll = new SLL();
    sll.add('A');
    sll.add('B');
    sll.add('C');
    sll.add('D');
    sll.add('E');
  });

  it('#it should return reversed head', () => {
    let newHead = reverseSll(sll.head);
    expect(newHead.data).to.equal('E');
  });
});
