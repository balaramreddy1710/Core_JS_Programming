function chunk(a, n) {
  let r = [];
  for (let i = 0; i < a.length; i += n) {
    r.push(a.slice(i, i + n));
  }
  return r;
}

let a = [1, 2, 3, 4, 5, 6, 1, 3, 2, 4, 1];
let n = 2;

console.log(chunk(a, n));
