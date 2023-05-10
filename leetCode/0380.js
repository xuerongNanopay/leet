// 380. Insert Delete GetRandom O(1)

var RandomizedSet = function() {
  // Map is using for O(1) insert and remove
  this.val_idx = {}
  // List is using for 0(1) random. There is trick when delete.
  this.vals = []
}

RandomizedSet.prototype.insert = function(val) {
  if ( val in this.val_idx ) return false;

  this.vals.push(val);
  this.val_idx[val] = this.vals.length-1;
  return true;
}

RandomizedSet.prototype.remove = function(val) {
  if ( ! (val in this.val_idx) ) return false;

  //Trick: swap the element to the end of the list, and delete the last one.
  let index = this.val_idx[val];
  this.val_idx[this.vals[this.vals.length-1]] = index;
  this.vals[index] = this.vals[this.vals.length - 1];
  
  delete this.val_idx[val];
  this.vals.pop();
  return true;
}

RandomizedSet.prototype.getRandom = function(val) {
  let rand = Math.floor(Math.random()*(this.vals.length-1));
  return this.vals[rand];
}