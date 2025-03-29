isValid = (arr) => {
  let n = arr.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
    top = stack[stack.length - 1];
    if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{") {
      stack.push(arr[i]);
    } else if (
      (top == "(" && arr[i] == ")") ||
      (top == "[" && arr[i] == "]") ||
      (top == "{" && arr[i] == "}")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length ? false : true;
};

let arr = "()[]";
console.log(isValid(arr));
