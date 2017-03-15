'use strict';

/* We need a class to represent the hash table. The class will include functions
for computing hash values,
a function for inserting data into the hash table,
a function for retrieving data from the hash table,
a function for displaying the distribution of data in the hash table,
as well as various utility functions we might need. */

function HashTable() {
  this.table = new Array(137);
  //this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  //this.get = get;
}

/* A simple hash function that at first glance seems to work well is to sum the ASCII value of the letters in the key. The hash value is then that sum modulo the array size. */
function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    total += data[i].charCodeAt();
  }
  return total % this.table.length;
}

function betterHash(data) {
  const H = 39;
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
    total += H * total + data[i].charCodeAt();
  }
  total = total % this.table.length;
  console.log(total);
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}
//place the data in the hash table
function put(data) {
  var pos = this.betterHash(data);
  this.table[pos] = data;
}

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(`${i} : ${this.table[i]}`)
    }
  }
}

module.exports = HashTable;
