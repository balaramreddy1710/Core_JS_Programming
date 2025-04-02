let myPromise = new Promise(function (resolve, reject) {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Successful!");
    } else {
      reject("Unsuccessful");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally runs no matter what!");
  });
