/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val);
    if(this.size === 0) {
      this.first = node;
      this.last = node;
    } else if(this.size >= 1) {
      let first = this.first;
      this.first = node;
      this.first.next = first;
    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    try {
      let first = this.first;
      if(this.size === 1) {
        this.last = null;
      }
      this.first = this.first.next
      this.size--;
      return first.val;
    } catch(err) {
      throw err;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;
