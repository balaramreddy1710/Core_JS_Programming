const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

const text = Object.entries(person);
console.log(text);

let txt = "";
for (let [key, value] of Object.entries(person)) {
  txt += key + ": " + value + "\n";
}
console.log(txt);
