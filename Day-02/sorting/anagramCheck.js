function anagCheck(t1, t2) {
  t1 = t1.split("").sort().join("");
  t2 = t2.split("").sort().join("");

  return t1 == t2;
}

let t1 = "rat";
let t2 = "thar";

console.log(anagCheck(t1, t2));
