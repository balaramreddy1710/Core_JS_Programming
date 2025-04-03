function remDup(a) {
  let a1 = new Set(a);
  return [...a1];
}

let a = [1, 2, 3, 1, 2, 4];

console.log(remDup(a));
