function rotK(a, k) {
  k = k % a.length;
  a = a.slice(-k).concat(a.slice(0, -k));
  return a;
}

let a = [1, 2, 3, 4, 5];
let k = 2;

console.log(rotK(a, k));
