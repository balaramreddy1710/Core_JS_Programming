class Queue {
  constructor() {
    this.q = [];
  }

  enqueue(value) {
    this.q.push(value);
  }

  isEmpty() {
    return this.q.length === 0;
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.q.shift();
    }
  }

  getFront() {
    return this.isEmpty ? -1 : this.q[0];
  }

  display() {
    return this.q;
  }
}

let qu = new Queue();
qu.isEmpty();
qu.enqueue(10);
qu.enqueue(20);
console.log(qu.display());

qu.enqueue(30);
console.log(qu.display());

qu.dequeue();
console.log(qu.display());
