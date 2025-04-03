function merge(a, b) {
  return new Set([...a, ...b]);
}

let a = [1, 2, 3, 4, 5];
let b = [2, 4, 6, 8];

console.log(merge(a, b));
