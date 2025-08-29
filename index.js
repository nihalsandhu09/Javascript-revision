// // var add himself into a window

// function abcd() {
//   let b = 12;
//   if (true) {
//     let a = 12;
//   }
// }

// // Temporal Dead Zone
// // console.log(a);
// // let b = 12;

// // hoisting impact per type

// // Data types

// //  data ka type
// // primitive and refrence
// let a = 12;
// let b = ++a;

// console.log(a);
// console.log(b);

// // primitive types

// // strings
// // '' single quotes
// // "" double quotes
// // `` backticks

// // symnol >> unique immutable value
// let u1 = Symbol("12");
// console.log(u1);

// // bigint
// let bigint = 9007199254740991n;

// // refrence data type
// // arrays
// let arr = [1, 2, 4];

// // Objects
// let h = {
//   name: "harsh",
// };
// let m = h;
// m.name = "Nihal";
// console.log(m);
// console.log(h);

// type coercion
// it also depends on which operator are you using  like  with + operator concatenation happens so thats why it alsways concat with and number will change to string with - only one operatin done that is sutarting
// "5" + 1; = 51
// "5"-1 = 4

// truthy and falsy values
// 0 flase false "" null undefined document.all NaN
// baki sari truthy

// practice

// operators

// Arithmetic
// + - / * % **
// 1+2 = 3
// "ha" + "rsh" = "harsh "
// 12-2=10

// comparison operators
// = == === != !== >= <= > <

// assignments operators

// = += -= *= /= %=

// let hn = 12;
// hn += 3;
// hn -= 11;
// hn *= 2;
// hn /= 2;
// hn %= 3;

// logical
// && || !
// true && true  bith side should be true
// true || false >> if one side is true then it will pass
!false;

// unary operator
// + - ! typeof ++ --

// trnary operator

// ? :
// condition ? true hui ka code : false hui ka code
// 12 > 13 ? console.log(true) : console.log(false);

// practice

// let a = 5;
// let b = a++ + ++a;
// console.log(a, b);

// let x = 3;
// let y = ++x + x++ + --x;
// console.log(x, y);

// let p = 7;
// let q = p-- - --p + p++;
// console.log(p, q);

// let num = 4;
// num = num++ + ++num + num--;
// console.log(num);

// let a = 2;
// let b = a++ + a++ + ++a + --a;
// console.log(a, b);

// Control Flow
// if else else  if
// switch case
// early return pattern

// early return pattern
// function getVal(val) {
//   if (val < 25) return "D";
//   else if (val < 50) return "c";
//   else if (val < 75) return "B";
//   else return "A";
// }
// console.log(getVal(89));

// // write a  function getGrade that takes a students marks 0 - 100

// function getGrade(marks) {
//   if (marks < 59 && marks > 33) return "D";
//   else if (marks <= 69 && marks >= 60) return "C";
//   else if (marks <= 79 && marks >= 70) return "B";
//   else if (marks <= 89 && marks >= 80) return "A";
//   else if (marks <= 100 && marks >= 90) return "A+";
//   else return "fail";
// }
// console.log(getGrade(25));

// console.log(h);
// let h = 10;

// Rock-paper-scissors logic
// function rps(user, computer) {
//   if (user === computer) return "draw";

//   if (user === "rock" && computer === "scissor") return "user";
//   if (user === "scissor" && computer === "paper") return "user";
//   if (user === "paper" && computer === "rock") return "user";

//   return "computer";
// }

// console.log(rps("rock", "scissor"));
// console.log(rps("scissor", "paper"));
// console.log(rps("paper", "rock"));
// console.log(rps("scissor", "rock"));

// loops
// for while do while forin forof foreach
//

let i = 1;
while (i < 32) {
  //  code
  console.log(i);
  i++;
}

// do while
let j = 1;
do {
  console.log();
} while (j < 20);

// break and continue

for (let i = 1; i < 201; i++) {
  console.log(i);
  if (i === 32) {
    break;
  }
}
