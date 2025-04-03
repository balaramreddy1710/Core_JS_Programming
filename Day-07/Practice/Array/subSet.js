function sub(a, b) {
  return b.every((i) => a.includes(i));
}

let a = [1, 2, 3];
let b = [2, 4];

console.log(sub(a, b));
