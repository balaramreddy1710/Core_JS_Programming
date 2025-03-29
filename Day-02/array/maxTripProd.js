function maxTripProd(arr) {
  n = arr.length;

  arr.sort((a, b) => a - b);

  return Math.max(
    arr[0] * arr[1] * arr[n - 1],
    arr[n - 1] * arr[n - 2] * arr[n - 3]
  );
}

let arr = [1, 4, 2, 6, 3];
console.log(maxTripProd(arr));
