function secLar(ar) {
  ar = ar.sort((a, b) => a - b);
  let s = new Set(ar);
  ar = [...s];
  return ar[ar.length - 2];
}

let ar = [1, 2, 23, 45, 21, 45];
console.log(secLar(ar));
