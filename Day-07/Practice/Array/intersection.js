function inter(a, b) {
  return b.filter((i) => a.includes(i));
}

let a = [1, 2, 3, 4];
let b = [2, 4, 6, 8];

console.log(inter(a, b));
