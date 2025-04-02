function camelCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1)))
    .join("");
}

let str = "hello world";

console.log(camelCase(str));
