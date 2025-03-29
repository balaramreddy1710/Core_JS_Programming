function findPair(arr, diff) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      if (arr[j] - arr[i] == diff) {
        console.log(`Pair found: (${arr[i]}, ${arr[j]})`);
        return;
      }
    }
  }
  console.log(`Pair not found`);
}
const arr = [1, 8, 30, 40, 100];
const diff = -60;

findPair(arr, diff);
