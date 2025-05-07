// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   console.log("*".repeat(i));
// }

// let rows1 = 5;
// for (let i = rows1; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// pyramid pattern
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
// }

// let rows1 = 5;
// for (let i = rows1 - 1; i >= 1; i--) {
//   console.log(" ".repeat(rows1 - i) + "*".repeat(2 * i - 1));
// }

// let num = 5;
// for (
//   let i = 1;
//   i <= num;
//   i++ //outer for loop
// ) {
//   let row = "";
//   // inner for loop
//   for (let j = 1; j <= i; j++) {
//     row = row + j + " ";
//   }
//   console.log(row);
// }

let rows = 5;
let num = 1;
for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + num + " ";
    num++;
  }
  console.log(row);
}
