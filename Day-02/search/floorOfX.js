function floorOfX(arr, x) {
  let a = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= x && arr[i] > a) {
      a = arr[i];
    }
  }
  return a;
}

let arr = [1, 2, 8, 10, 11, 12, 19];
let x = 16;
console.log(floorOfX(arr, x));
