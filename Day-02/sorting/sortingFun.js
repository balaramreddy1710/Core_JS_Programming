let arr = [1, 43, 12, 4, 10];

arr.sort((a, b) => a - b);

console.log(`Ascending sort ${arr}`);

arr.sort((a, b) => b - a);

console.log(`Descending sort ${arr}`);
