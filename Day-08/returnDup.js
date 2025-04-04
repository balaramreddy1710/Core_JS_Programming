function findDuplicates(nums) {
  const seen = new Set();
  const duplicates = [];

  for (let num of nums) {
    if (seen.has(num)) {
      duplicates.push(num);
    } else {
      seen.add(num);
    }
  }

  return duplicates;
}

let nums = [4, 2, 4, 11, 31, 31];
console.log(findDuplicates(nums));
