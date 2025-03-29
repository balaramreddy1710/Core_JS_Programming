let list = [12, 3, 4, 313, 62, 12, 43];

let ele = 12;

for (let i = 0; i < list.length; i++) {
  if (list[i] == ele) {
    console.log("It is found at", i);
    break;
  }
  console.log("Not found");
}
