const firstFunc = () => (s) => (t) => {
  console.log(`First: first`);
  s(t);
};

const secondFunc = (t) => {
  console.log(`Second: second`);
  t();
};

const thirdFunc = () => {
  console.log(`Third: last`);
};

let r = firstFunc();
let r1 = r(secondFunc);
let r2 = r1(thirdFunc);
console.log("Stop");


