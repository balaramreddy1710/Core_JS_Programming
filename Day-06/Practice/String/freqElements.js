function freq(st) {
  frequent = {};
  for (let ele of st) {
    frequent[ele] = (frequent[ele] || 0) + 1;
  }
  return frequent;
}

let st = "aabdhas";
console.log(freq(st));
