class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newnode;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

let list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.print();
