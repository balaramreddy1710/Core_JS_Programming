function reverse(stack) {
  let queue = [];

  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  while (queue.length > 0) {
    stack.push(queue.shift());
  }

  return stack;
}

let stack = [10, 20, 30, 40];

console.log(reverse(stack));
