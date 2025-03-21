class LinkedList {
  constructor(value) {
    const temp = createNode(value);
    this.head = temp;
    this.tail = temp;
    this.size = 1;
  }

  append(node) {
    this.size++;
    this.tail.next = node;
    this.tail = node;
  }

  prepend(node) {
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
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
  
  length(){
    return this.size;
  }
  
  getHead(){
    return this.head;
  }
  
  getTail(){
    return this.tail;
  }

  at(n){
    
    let i = 0;
    let cursor = this.head;

    while(i !== n){  
      c
    }
    
    return cursor.value;

  }

}

function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

const list = new LinkedList(1);
list.append(createNode(2));
list.append(createNode(3));
list.append(createNode(4));
list.prepend(createNode(0));
list.toString();

console.log(list.length());

