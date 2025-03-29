let st = "Hello";
console.log(revString(st));

function revString(string) {
  let s = string;
  let rev = "";
  for (var i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  return rev;
}
