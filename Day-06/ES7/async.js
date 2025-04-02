async function print() {
  let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
      myResolve("Hi there!!");
    }, 3000);
  });
  const res = await myPromise;
  console.log(res);
}

print();
