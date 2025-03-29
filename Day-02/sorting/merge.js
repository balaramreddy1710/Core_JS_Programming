function merge(arr, left, mid, end) {
  n1 = mid - left + 1;
  n2 = end - mid;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[mid + 1 + j];
  }

  let i = 0,
    j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  const mid = Math.floor(start + (end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

const arr = [64, 25, 12, 22, 11, 35, 46];

mergeSort(arr, 0, arr.length - 1);

console.log(arr.join(" "));
