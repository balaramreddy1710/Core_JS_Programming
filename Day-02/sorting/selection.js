function select(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min_idx];
    arr[min_idx] = temp;
  }
}

let arr = [64, 25, 12, 22, 11];

select(arr);

console.log(arr.join(" "));
