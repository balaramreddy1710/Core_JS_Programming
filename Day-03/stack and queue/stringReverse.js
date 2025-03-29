let st = "Hello";

let stack = [...st];

let result = "";
for (let i = stack.length - 1; i >= 0; i--) {
  result += stack.pop();
}

console.log(result);
