function caps(st) {
  return st.replace(/\b\w/g, (c) => c.toUpperCase());
}

let st =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development";

console.log(caps(st));
