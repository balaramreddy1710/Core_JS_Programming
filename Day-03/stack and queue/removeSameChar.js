function removeSame(st1, st2) {
  n1 = st1.length;
  n2 = st2.length;
  let i, j;
  for (i = 0; i < n2; i++) {
    for (j = 0; j < n1; j++) {
      if (st1.charAt(j) == st2.charAt(i)) {
        st1 = st1.substring(0, j) + st1.substring(j + 1);
        n1--;
        j--;
      }
    }
  }
  return st1;
}

let st1 = "occurances";
let st2 = "car";

console.log(removeSame(st1, st2));
