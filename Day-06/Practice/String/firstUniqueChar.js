function unique(st) {
  for (let char of st) {
    if (st.indexOf(char) === st.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

let st = "aabbcded";
console.log(unique(st));
