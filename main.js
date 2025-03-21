function createNode(value) {
  return {
    value: value,
    prev: null,
    next: null,
  };
}

class LinkedList {
  constructor(value) {
    let temp;
    this.size = 1;

    if (value === undefined) {
      temp = null;
      this.size = 0;
    } else {
      temp = createNode(value);
      this.size = 1;
    }

    this.head = temp;
    this.tail = temp;
  }

  append(value) {
    const node = createNode(value);
    if (this.getHead() === null) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }

    this.tail = node;
    this.size++;
  }

  prepend(value) {
    const node = createNode(value);

    if (this.getHead() !== null) this.head.prev = node;

    this.size++;
    node.next = this.head;
    this.head = node;
  }

  length() {
    return this.size;
  }
  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(n) {
    let i = 0;
    let cursor = this.head;

    while (i !== n) {
      cursor = cursor.next;
      if (cursor === null) return null;
      i++;
    }
    return cursor;
  }

    pop() {
      if (this.size === 0) return null;

      if (this.size === 1) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        return;
      }
      
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
    }

  contains(value) {
    let cursor = this.head;

    while (cursor !== null) {
      if (cursor.value === value) return true;

      cursor = cursor.next;
    }

    return false;
  }

  find(value) {
    let cursor = this.head;
    let i = 0;

    while (cursor !== null) {
      if (cursor.value === value) return i;
      cursor = cursor.next;
      i++;
    }

    return null;
  }

  toString() {
    let cursor = this.head;
    let string = "";

    while (cursor != null) {
      cursor.next === null
        ? (string += `(${cursor.value})`)
        : (string += `(${cursor.value}) --> `);
      cursor = cursor.next;
    }

    console.log(string);
  }

  insertAt(value, index) {
    const newNode = createNode(value);

    if (value === undefined && index === undefined) return null;

    if (index === 0) {
      console.log("prepend");
      this.prepend(value);
      return;
    }

    if (index === this.length()) {
      console.log("append");
      this.append(value);
      return;
    }

    if (index > this.length() || index < 0) {
      console.log("null");
      return null;
    }

    let i = 0;
    let cursor = this.head;

    while (i !== index) {
      if (cursor === null) {
        return cursor;
      }

      cursor = cursor.next;
      i++;
    }

    const previous = cursor.prev;
    previous.next = newNode;
    cursor.prev = newNode;

    newNode.prev = previous;
    newNode.next = cursor;

    this.size++;
  }

  removeAt(index) {
    let cursor = this.head;
    let i = 0;

    if (index === undefined) return null;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    if (index === this.length() - 1) {
      this.pop();
      return;
    }

    if (index >= this.length() || index < 0) {
      return null;
    }

    while (i !== index) {
      cursor = cursor.next;
      i++;
    }

    // console.log(cursor);
    const previous = cursor.prev;
    const next = cursor.next;

    previous.next = cursor.next;
    next.prev = cursor.prev;

    this.size--;
  }
}

const list = new LinkedList();
