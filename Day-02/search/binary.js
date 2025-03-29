function binSearch(arr, k, s, e) {
  if (s > e) {
    return false;
  }

  let mid = Math.floor((s + e) / 2);

  if (arr[mid] === k) {
    return true;
  }

  if (arr[mid] < k) {
    return binSearch(arr, k, mid + 1, e);
  } else {
    return binSearch(arr, k, s, mid - 1);
  }
}

let arr = [1, 3, 5, 6, 7, 9, 11];
let k = 8;

if (binSearch(arr, k, 0, arr.length - 1)) {
  console.log("Element Found");
} else {
  console.log("Element Not Found");
}
