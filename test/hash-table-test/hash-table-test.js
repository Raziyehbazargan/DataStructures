'use strict';

var expect = require('chai').expect;
var HashTable = require('../../1-data-structures/hash-table/implementation/hash-table.js');

describe('#hash-table', function() {
  var data = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
  var hash = new HashTable();
  before(() => {
    for (var i = 0; i < data.length; i++) {
      hash.put(data[i])
    }
    hash.showDistro();
  });

  it('#it should return hashTable with data', function() {
    expect(hash.table).length.to.be(137);
    expect(hash.table).to.have.property(65);
  });
});
