// Map

let myMap = new Map();

myMap.set("hi", "guys");
myMap.set("hello", "world");

console.log(myMap.get("hi"));
console.log(myMap.keys());
console.log(myMap.values());

//Weak Map

let wMap = new WeakMap();

let obj = {
  name: "J",
};

wMap.set(obj, "Prichett");

console.log(wMap.get(obj));
