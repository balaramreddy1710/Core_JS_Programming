// getter and setter
// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   lang: "No",
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },

//   get Lang() {
//     return this.lang;
//   },

//   set Lang(value) {
//     this.lang = value;
//   },
// };

// console.log(person.fullName);
// console.log(person.lang);
// person.lang = "en".toUpperCase();
// console.log(person.lang);

// defineProperty
// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   lang: "No",
// };

// Object.defineProperty(person, "lang", {
//   value: "Tamil",
//   enumerable: true,
//   writable: true,
//   configurable: true,
// });

// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }

// console.log(txt);

// create
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   lang: "No",
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const man = Object.create(person);
// man.firstName = "Roy";
// man.lastName = "Mustang";

// console.log(man.fullName);

// keys
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   lang: "No",
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };
// console.log(Object.keys(person));

// bind

const person = {
  firstName: "John",
  lastName: "Doe",
  lang: "No",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const man = {
  firstName: "John",
  lastName: "Mathews",
};

let fullName = person.fullName.bind(man);
console.log(fullName());
