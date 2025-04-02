function strRot(a, b) {
  return a.length == b.length && (a + b).includes(b);
}

let a = "hello";
let b = "elloh";

console.log(strRot(a, b));
