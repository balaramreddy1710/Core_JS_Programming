function palin(st) {
  st = st.toLowerCase();
  return st === [...st].reverse().join("");
}

let st = "malayalam";

console.log(palin(st));
