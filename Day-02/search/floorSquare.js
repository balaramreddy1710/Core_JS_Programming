function square(num) {
  let res = 1;
  while (res * res <= num) {
    res++;
  }
  return res - 1;
}

num = 65;
console.log(square(num));
