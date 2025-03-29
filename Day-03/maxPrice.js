let arr = [3, 7, 6, 4, 8, 10];
let max = 0;
let buy = 0;
let sell = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] - arr[i] > max) {
      max = arr[j] - arr[i];
      buy = arr[i];
      sell = arr[j];
    }
  }
}

console.log(` Selling Price ${sell} - Buying Price ${buy} = Profit ${max}`);

console.table([
  `Selling Price,${sell}`,
  `Buying Price,${buy}`,
  `Profit ${max}`,
]);
