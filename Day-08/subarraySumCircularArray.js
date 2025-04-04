function maxCircularSubarraySum(nums) {
  let total = 0;
  let maxSum = -Infinity,
    curMax = 0;
  let minSum = Infinity,
    curMin = 0;
  for (let n of nums) {
    curMax = Math.max(n, curMax + n);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(n, curMin + n);
    minSum = Math.min(minSum, curMin);
    total += n;
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}

let nums = [1, -2, 3, -2];
console.log(maxCircularSubarraySum(nums));
