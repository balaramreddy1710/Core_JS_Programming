//Leetcode 2620
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
