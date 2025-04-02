function truncate(str, n) {
  return str.length > n ? str.slice(0, n) + "..." : str;
}

let st =
  "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development";

let n = 5;

console.log(truncate(st, n));
