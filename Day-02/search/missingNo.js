function miss(arr) {
  n = arr.length + 1;

  for (let i = 1; i < n; i++) {
    let found = false;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] == i) {
        found = true;
      }
    }
    if (!found) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(miss(arr));
