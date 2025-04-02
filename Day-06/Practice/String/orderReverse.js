function orderRev(st) {
  return st.split(" ").reverse().join(" ");
}

let st =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development";

console.log(orderRev(st));
