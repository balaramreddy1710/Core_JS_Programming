function move(arr, n) {
  let len = arr.length;

  for (let i = 0; i < n; i++) {
    let first = arr[0];
    for (let j = 0; j < len - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[len - 1] = first;
  }
}

let arr = [1, 2, 4, 5, 8, 9];
let n = 2;

move(arr, n);
console.log(arr.join(" "));
