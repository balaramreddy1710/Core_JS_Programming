let st = "Malayalam";
if (pal(st)) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}

function pal(string) {
  let s = string;
  let rev = "";
  for (var i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev == st;
}
