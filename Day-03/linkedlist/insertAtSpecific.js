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

  insertAtBegin(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    newnode.next = this.head;
    this.head = newnode;
  }

  insertAtSpecific(value, pos) {
    if (pos < 0) {
      console.log("Position must be a positive number");
      return;
    }
    let newnode = new Node(value);
    let current = this.head;
    let count = 0;

    if (pos == 0) {
      this.insertAtBegin(value);
      return;
    }

    while (current && count < pos - 1) {
      count++;
      current = current.next;
    }

    if (!current) {
      this.insertAtEnd(value);
      return;
    }

    newnode.next = current.next;
    current.next = newnode;
  }
}

let list = new LinkedList();
list.insertAtBegin(5);
list.insertAtSpecific(10, 2);

list.print();

list.insertAtSpecific(7, 1);

list.print();
