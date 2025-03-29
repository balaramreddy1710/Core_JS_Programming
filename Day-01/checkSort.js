let arr = [1, 24, 34, 43, 55];
// let arr = [1, 43, 12, 4, 10];
console.log(chkSort(arr));

function chkSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
      return false;
    }
  }
  return true;
}
