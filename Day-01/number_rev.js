// let num = 123;
// console.log(revNum(num));

// function revNum(n) {
//   let number = String(n);
//   let rev = "";
//   for (var i = number.length - 1; i >= 0; i--) {
//     rev += number[i];
//   }
//   return parseInt(rev);
// }

let num = 123;
console.log(revNum(num));

function revNum(n) {
  let n1 = n;
  let rev = 0;
  while (n1 >= 1) {
    let n2 = n1 % 10;
    rev = rev * 10 + n2;
    n1 = Math.floor(n1 / 10);
  }
  return rev;
}
