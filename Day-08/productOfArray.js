function prod(a) {
  const res = Array(a.length).fill(1);
  let pre = 1,
    post = 1;

  for (let i = 0; i < a.length; i++) {
    res[i] *= pre;
    pre *= a[i];
  }

  for (let i = a.length - 1; i >= 0; i--) {
    res[i] *= post;
    post *= a[i];
  }
  return res;
}

let a = [1, 2, 3, 4];

console.log(prod(a));
