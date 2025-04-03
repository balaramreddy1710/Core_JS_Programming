function freq(arr) {
  let f = {};
  for (let e of arr) {
    f[e] = (f[e] || 0) + 1;
  }
  return f;
}

let a = [1, 2, 3, 4, 1, 3, 4];

console.log(freq(a));
