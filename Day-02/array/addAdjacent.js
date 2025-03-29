let arr = [2, 4, 6, 8, 10];
let out = [];
for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    out[i] = arr[i] + arr[i + 1];
  } else if (i == arr.length - 1) {
    out[i] = arr[i] + arr[i - 1];
  } else {
    out[i] = arr[i] + arr[i - 1] + arr[i + 1];
  }
}

console.log(out);
