'use strict';

/* We need a class to represent the hash table. The class will include functions
for computing hash values,
a function for inserting data into the hash table,
a function for retrieving data from the hash table,
a function for displaying the distribution of data in the hash table,
as well as various utility functions we might need. */
module.exports = exports = {};

exports.HashTable = function() {
  this.table = [];
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
}

/* A simple hash function that at first glance seems to work well is to sum the ASCII value of the letters in the key. The hash value is then that sum modulo the array size. */
exports.simpleHash = function(data) {
  var total = 0;
  console.log(data, ' in simpleHsh');

  for (var i = 0; i < data.length; i++) {
    total += data[i].charCodeAt();
  }
  return total % this.table.length;
}

//place the data in the hash table
exports.put = function(data) {
  console.log(data, 'in put');
  var pos = this.simpleHash(data);
  this.table[pos] = data;
}

exports.showDistro = function() {
  var n = 0;
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(`${i} : ${this.table[i]}`)
    }
  }
}
