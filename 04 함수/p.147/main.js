let init = () => {
  return function (a, b) {
    return a - b > 0 ? a - b : b - a;
  };
};

let init2 = () => {
  return () => {
    return a - b > 0 ? a - b : b - a;
  };
};

console.log(`init(30, 20) : ${init()(30, 20)}`);
