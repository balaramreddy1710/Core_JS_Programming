function vowel(st) {
  st = st.toLowerCase();
  let count = st.match(/[aeiou]/gi || []).length;
  return count;
}

let st = "jqidaxveo";
console.log(vowel(st));
