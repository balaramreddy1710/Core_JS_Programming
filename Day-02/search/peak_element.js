function peak(arr) {
  n = arr.length;
  pList = [];
  for (let i = 0; i < n; i++) {
    if (i == 0 && arr[i] > arr[i + 1]) {
      pList.push(arr[i]);
    } else if (i == n - 1 && arr[i - 1] < arr[i]) {
      pList.push(arr[i]);
    } else {
      if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
        pList.push(arr[i]);
      }
    }
  }
  return pList;
}

let arr = [10, 20, 15, 30, 25, 40];

console.log(peak(arr));
