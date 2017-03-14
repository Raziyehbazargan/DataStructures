'use strict';

var expect = require('chai').expect;
var HashTable = require('../../hash-table/implementation/hash-table.js');

describe('#hash-table', function() {
  var data = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

  before(() => {
    console.log(data, 'in before');
    for (var i = 0; i < data.length; i++) {
      HashTable.put(data)
    }
    HashTable.showDistro();
  });

  it('#it should return hashTable with data', function() {
    expect(HashTable.table).length.to.be(9);
  });
});
