/* 
substring : 
--------------------
javascript  --> string slice

methods of the string class
-------------------------------
1. length
2. concat
3. substring --> start count --> 0 , end count --> 1 --> negitive index not supported.
4. toUpperCase()
5. toLowerCase()
6. indexof
7. lastIndexOf()
8. Replace
9. ReplaceAll()
10. slice(start, end) ---> We will use negitive index.
11. trim(): Removes all whitespaces from right side and left side
12. split: split method can be used to spilt the string into an array based on seprator.
13. charAt() : Returns the character at specific index.
14. charCodeAt(index): 
15. startsWith(): To check if the character or word starts with specific char or word.
16. endsWith():
17. repeat():

javasc

*/

// let mystr = "javascript";
// let mystr2 = "python";
// console.log(mystr);

// // let mystr1 = new String("javascript");
// // console.log(mystr1);

// // length
// console.log(mystr.length);
// console.log(mystr + " " + mystr2);

// const myStr =
//   "The javascript is easy to learn and javascript is easy understands";
// const data = myStr.split(" ");
// console.log(data[1]);

const myStr =
  "The, javascript, is easy to learn and javascript is easy understands";
const data = myStr.split("-");
console.log(data[1] + " " + data[10]);

// let str = "python";
// console.log(str.repeat(3));
