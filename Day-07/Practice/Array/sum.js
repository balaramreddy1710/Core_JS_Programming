function sum(a) {
  return a.reduce((r, c) => r + c, 0);
}

let a = [1, 2, 4, 7];
console.log(sum(a));
