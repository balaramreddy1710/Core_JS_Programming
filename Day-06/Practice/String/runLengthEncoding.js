function rle(st) {
  st = [...st].sort().join("");
  let count = 1;
  let res = "";
  for (let i = 0; i < st.length; i++) {
    if (st[i] == st[i + 1]) {
      count++;
    } else {
      res += st[i] + count;
      count = 1;
    }
  }
  return res;
}

let st = "abcabdad";

console.log(rle(st));
