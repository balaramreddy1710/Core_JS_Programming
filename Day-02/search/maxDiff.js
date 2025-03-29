function maxDif(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] + " " + arr[arr.length - 1];
}

let arr = [5, 20, 3, 2, 50, 80];
console.log(maxDif(arr));
