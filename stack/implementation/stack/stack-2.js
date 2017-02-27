'use strict';

function Stack() {
  this.dataStore = [];
  this.push = push;
  this.pop = pop;
  this.top = 0;
  this.peek = peek;
  this.clear = clear;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}