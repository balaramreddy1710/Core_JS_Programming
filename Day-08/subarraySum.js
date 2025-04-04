function subarraySum(nums, k) {
  let sum = 0,
    count = 0;
  let map = new Map();
  map.set(0, 1);
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

console.log(subarraySum([1, 2, 3], 3));
