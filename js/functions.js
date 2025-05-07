// function add(n1, n2) {
//   let sum = n1 + n2;
//   return sum;
// }

// console.log(add(44, 55));

// function doSquare(num) {
//   return num * num;
// }
// let result = doSquare(5);
// console.log(result);function doSquare(num) {
//   return num * num;
// }
// let result = doSquare(5);
// console.log(result);

// document.getElementById("mybtn").onclick = function () {
//   alert("hello");
// };

// let result = (a, b) => {
//   return a + b;
// };
// console.log(result(5, 5));

// ((a, b) => {
//   let result = a + b;
//   console.log(`The result is ${result}`);
// })(2, 2);

function sayHello(name, callback) {
  console.log("Hello " + name);
  callback(); // it means we call displayMsg indirectly
}
function displayMsg() {
  console.log("This is the callback block");
}
sayHello("Ajay", displayMsg);
