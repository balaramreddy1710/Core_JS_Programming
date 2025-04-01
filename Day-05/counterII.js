//Leetcode 2665

var createCounter = function (init) {
  let num = init;
  return {
    increment: function () {
      return ++num;
    },
    decrement: function () {
      return --num;
    },
    reset: function () {
      return (num = init);
    },
  };
};
