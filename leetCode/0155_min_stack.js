// 155. Min Stack

var MinStack = function() {
  this.stack = []; //[value, curMin]
};

MinStack.prototype.push = function(val) {
  if ( this.stack.length == 0 ) {
    this.stack.push([val, val]);
  } else {
    this.stack.push([val, Math.min(this.stack[this.stack.length-1][1], val)]);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
if ( this.stack.length === 0 ) return null;
let [val, _] = this.stack.pop();
return val;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
if ( this.stack.length === 0 ) return null;
let [val, _] = this.stack[this.stack.length-1];
return val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
if ( this.stack.length === 0 ) return null;
let [_, curMin] = this.stack[this.stack.length-1];
return curMin;
};
