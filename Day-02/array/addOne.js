let arr = [1, 2, 4];

let sum = "";

for (let i = 0; i < arr.length; i++) {
  sum += String(arr[i]);
}

console.log(parseInt(sum) + 1);
