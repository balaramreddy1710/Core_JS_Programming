function charFreq(st, ch) {
  let count = 0;
  for (let char of st) {
    if (char == ch) {
      count += 1;
    }
  }
  return count;
}

let st = "dnasfjadbacnakbfjafc";
let ch = "a";

console.log(charFreq(st, ch));
