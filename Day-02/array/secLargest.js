function secLar(a) {
  n = a.length;

  a.sort((a, b) => a - b);

  for (let i = n - 2; i >= 0; i--) {
    if (a[i] != a[n - 1]) {
      return a[i];
    }
  }
  return -1;
}

let a = [12, 4, 54, 21, 35];
console.log(secLar(a));
