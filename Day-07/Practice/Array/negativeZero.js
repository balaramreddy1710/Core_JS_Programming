function replaceNeg(a) {
  return a.map((i) => (i < 0 ? 0 : i));
}

let a = [-1, 1, -2, 2, -3, 3, 4];
console.log(replaceNeg(a));
