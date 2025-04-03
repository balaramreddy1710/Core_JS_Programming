function sort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
  }
  return a;
}

let a = [2, 3, 1, 4, 0];

console.log(sort(a));
