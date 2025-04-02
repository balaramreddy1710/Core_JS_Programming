function spaceRemove(st) {
  st = st.replaceAll(" ", "");
  return st;
}

let st =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development";

console.log(spaceRemove(st));
