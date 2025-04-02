function long(st) {
  st = st.split(" ");
  let max = 0;
  let s = "";
  for (let char of st) {
    if (char.length > max) {
      max = char.length;
      s = char;
    }
  }
  return s;
}
let st =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development";

console.log(long(st));
