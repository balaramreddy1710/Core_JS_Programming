let a = "Hi";
let b = "There";

a = a + b; //HiThere

// b = a.substring(0, a.length - b.length);

// a = a.substring(b.length);

b = a.replace(b, ""); //Hi

a = a.replace(b, ""); //There

console.log(a);
console.log(b);
