class LinkedList {
  constructor(value) {
    const temp = createNode(value);
    this.head = temp;
    this.tail = temp;
    this.size = 1;
  }

  append(node) {
    node.prev = this.tail;
    this.size++;
    this.tail.next = node;
    this.tail = node;
  }

  prepend(node) {
    this.size++;
    node.next = this.head;
    this.head = node;
  }

  toString() {
    let cursor = this.head;
    let string = "";

    while (cursor != null) {
      cursor.next === null
        ? (string += `${cursor.value}`)
        : (string += `${cursor.value} --> `);
      cursor = cursor.next;
    }

    console.log(string);
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
      c;
    }

    return cursor.value;
  }
}

function createNode(value) {
  return {
    value: value,
    prev: null,
    next: null,
  };
}

const list = new LinkedList(1);
list.append(createNode(2));
list.append(createNode(3));
list.append(createNode(4));
list.prepend(createNode(0));
list.prepend(createNode(-1));
list.toString();

console.log(list.length());
