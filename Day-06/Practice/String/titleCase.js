function title(st) {
  st = st.split(" ");
  for (let i = 0; i < st.length; i++) {
    st[i] = st[i][0].toUpperCase() + st[i].slice(1, st[i].length);
  }
  return st.join(" ");
}

let st =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development";

console.log(title(st));
