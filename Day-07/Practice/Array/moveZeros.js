function zero(a) {
  return a.filter((i) => i !== 0).concat(a.filter((i) => i === 0));
}

let a = [0, 1, 0, 1, 0, 2];

console.log(zero(a));
