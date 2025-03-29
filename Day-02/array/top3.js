let arr = [50, 40, 35, 90, 65, 79, 80, 78, 87, 95];

console.log(top3(arr));

function top3(arr) {
  n = arr.length;

  arr.sort((a, b) => b - a);
  return arr.slice(0, 3);
}
