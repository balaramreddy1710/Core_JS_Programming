function lar(a) {
  n = a.length;

  a.sort((a, b) => a - b);

  return a[n - 1];
}

let a = [12, 4, 54, 21, 35];
console.log(lar(a));
