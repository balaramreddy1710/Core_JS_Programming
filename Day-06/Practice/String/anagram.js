function checkAnagram(s1, s2) {
  s1 = s1.split("").sort().join(",");
  s2 = s2.split("").sort().join(",");
  return s1 == s2 ? true : false;
}

let s1 = "listen";
let s2 = "silent";

console.log(checkAnagram(s1, s2));
