let arr = [23, 45, 34, 22, 50, 60];

let threshold = arr.filter(thres);
console.log(threshold);
function thres(num) {
  return num > 30;
}
