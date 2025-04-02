function reDup(st) {
  let seen = new Set();
  return [...st].map((c) => (seen.has(c) ? "_" : (seen.add(c), c))).join("");
}

let st = "Banana";

console.log(reDup(st));
