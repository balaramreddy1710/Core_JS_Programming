function digitCheck(st) {
  for (let i = 0; i < st.length; i++) {
    if (st.charCodeAt(i) > 65) {
      return false;
    }
  }
  return true;
}

let st = "12342";

//console.log(/^\d+$/.test(st));

console.log(digitCheck(st));
