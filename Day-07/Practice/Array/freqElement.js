function freq(a) {
  let f = {};
  let max = 0;
  let res;
  for (let ele of a) {
    f[ele] = (f[ele] || 0) + 1;
    if (f[ele] > max) {
      max = f[ele];
      res = ele;
    }
  }
  return res;
}

let a = [2, 3, 2, 1, 4, 5];

console.log(freq(a));
