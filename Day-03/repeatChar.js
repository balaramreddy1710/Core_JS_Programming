let st = "baaabcdd";

st = [...st];
st.sort();

let res = "";
for (let i = 0; i < st.length; i++) {
  let count = 1;
  for (let j = i + 1; j < st.length; j++) {
    if (st[i] == st[j]) {
      count += 1;
    }
  }
  if (count > 1) {
    res += st[i];
    res += count;
  } else if (count == 1) {
    break;
  }
  while (st[i] == st[i + 1]) {
    i++;
  }
}

console.log(res);
