function search(list, ele) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == ele) {
      return true;
    }
  }
  return false;
}

let list = [12, 3, 4, 313, 62, 12, 43];

let ele = 2;

console.log(search(list, ele));
