function flat(a) {
  return a.flat(Infinity);
}

let a = [1, [2, 3], [4, 5]];
console.log(flat(a));
