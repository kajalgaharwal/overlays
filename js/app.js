// const womenEthnic = document.querySelector('.womenEthnic');
// const Menu1 = document.querySelector('.Menu1');
// womenEthnic.addEventListener('mouseenter', () => {
//   Menu1.classList.add('Menus1');
// });
// console.log(myfunc);
// let myfunc = function () {
//   console.log('hello world!');
// };
// console.log(myfunc);
// console.log(a);
// let a = 10;
// console.log(a);

function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log('hi!!you called me');
      counter++;
    } else {
      console.log('I already called!!');
    }
  };
}
const myFunc = func();
myFunc();
myFunc();
