// Set

let mySet = new Set();
mySet.add("1");
mySet.add(1);
mySet.add("2");
mySet.add(2);

console.log(mySet.values());
console.log(mySet.entries());

// WeakSet
let myWSet = new WeakSet();
let obj1 = {
  no: 1,
  st: "1",
};

let obj2 = {
  no: 2,
  st: "2",
};

myWSet.add(obj1);
myWSet.add(obj2);
console.log(myWSet.has(obj1));
