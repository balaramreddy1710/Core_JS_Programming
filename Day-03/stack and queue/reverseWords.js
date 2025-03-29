function reverse(st) {
  words = st.split(" ");

  const reverse = words.map((word) => [...word].reverse().join(""));

  return reverse.join(" ");
}

let st = "Hello World";

console.log(reverse(st));
