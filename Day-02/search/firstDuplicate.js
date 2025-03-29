let arr = [1, 2, 3, 3, 5];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      console.log(arr[i], "is occuring again at", i, "and", j);
      break;
    }
  }
}
