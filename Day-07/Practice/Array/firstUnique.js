function firstUniq(a) {
  let b = a.find((i) => a.indexOf(i) == a.lastIndexOf(i));
  return b;
}

let a = [1, 1, 2, 2, 3, 4, 5, 5];
console.log(firstUniq(a));
