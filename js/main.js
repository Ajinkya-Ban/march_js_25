// let age = prompt("Enter age");
// if (age >= 18) {
//   console.log("You are now our college member");
// } else {
//   console.log("Please check age only allowed age greater than 18");
//   console.log("You entered age is = ", age);
// }

// let s1 = parseInt(prompt("Enter subject1 marks out of 100"));
// let s2 = parseInt(prompt("Enter subject2 marks out of 100"));
// let s3 = parseInt(prompt("Enter subject3 marks out of 100"));

// let result = s1 + s2 + s3;
// // let per = (parseFloat(result) / 3).toFixed(2);
// let per = parseFloat(result) / 3;

// console.log(`The total marks of subjects ${s1}, ${s2} and ${s3} is ${result}`);
// console.log(`The percentage is ${Math.floor(per)}`);

// if (per <= 100 && per >= 95) {
//   console.log("You have Grade A");
// } else if (per <= 94 && per >= 60) {
//   console.log("You have grade B");
// } else if (per <= 59 && per >= 40) {
//   console.log("You have grade C");
// } else {
//   console.log("Fail");
// }

// let days = prompt("Enter a number between 1 to 7");
// switch (days) {
//   case "1":
//     console.log("Its Monday");
//     break;

//   case "2":
//     console.log("Its Tuesday");

//   case "3":
//     console.log("Its Wensd");
//     break;

//   default:
//     console.log("Please enter number between 0 to 6");
// }

let username = prompt("Enetr username");
let pass = prompt("Enter pass");

if (username === "admin" && pass === "123") {
  console.log("Login success");
} else {
  console.log("Login faild");
}
