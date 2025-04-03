function diff(a, b) {
  return a.filter((i) => !b.includes(i));
}

let a = [1, 2, 3, 4];
let b = [2, 4, 6, 8];

console.log(diff(a, b));
