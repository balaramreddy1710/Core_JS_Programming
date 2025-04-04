function minWindow(s, t) {
  if (!s || !t) return "";
  const map = {};
  for (let c of t) map[c] = (map[c] || 0) + 1;
  let start = 0,
    end = 0,
    minLen = Infinity,
    minStart = 0,
    counter = t.length;
  while (end < s.length) {
    if (map[s[end++]]-- > 0) counter--;
    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }
      if (map[s[start++]]++ === 0) counter++;
    }
  }
  return minLen === Infinity ? "" : s.substr(minStart, minLen);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
