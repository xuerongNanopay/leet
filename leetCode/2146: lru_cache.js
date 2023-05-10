// very very careful

var LRUCache = function(capacity) {
  this.cache = {} //key - node
  this.head = null;
  this.tail = null;
  this.total = 0
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
// change location
LRUCache.prototype.get = function(key) {
  if ( ! (key in this.cache) ) return -1;

  let node = this.cache[key];
  // update location on the list.
  if ( this.head === node && this.tail === node ) {
    // Do not thing
  } else if ( this.tail === node ) {
    this.tail = node.pre;
    node.pre.next = null;
    node.pre = null;
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
  } else if ( this.head === node ) {
    // Do not thing
  } else {
    node.pre.next = node.next;
    node.next.pre = node.pre;
    node.pre = null;
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
  }
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// Always put at this begining
LRUCache.prototype.put = function(key, value) {
  if ( key in this.cache ) {
    this.cache[key].val = value;
    this.get(key);
    return;
  }
  let newNode = new Node(key, value, null, null);
  this.cache[key] = newNode;

  if ( this.total < this.capacity ) {
    if ( this.head === this.tail && this.head === null ) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.pre = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.total++;
  } else {
    if ( this.head === this.tail && this.head === null ) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.pre = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    // Remove the last one.
    if ( this.head === this.tail ) {
      if ( this.head !== null ) {
        delete this.cache[this.head.key];
      }
      this.head = null;
      this.tail = null;
    } else {
      let remove = this.tail;
      this.tail.pre.next = null;
      this.tail = this.tail.pre;
      delete this.cache[remove.key];
    }
  }

};

var Node = function(key, val, pre, next) {
  this.key = key;
  this.val = val;
  this.pre = pre;
  this.next = next;
}