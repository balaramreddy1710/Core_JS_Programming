let arr = [20, 10, 5, 2, 1];

let stack = [];

for (let i = arr.length - 1; i >= 0; i--) {
  stack.push(arr[i]);
}

console.log(stack);
