// // what why how
// // what function

// let date = Date();
// // let time = date.time();

// console.log(date);
// // console.log(time);

// //  function declaration / statement
// function lolo() {
//   console.log("happy New Year");
// }

// // expression
// let fnc = function () {
//   console.log("funciton expression ");
// };

// // fat arrow function

// let fncArrow = () => {
//   console.log("arrow function ");
// };

// // parameters and arguments

// function print(a, b) {
//   // here we pass parameters
//   console.log(a + b);
// }
// print(1, 2); // here we pass arguments

// // default , rest and spread

// function sum(a = 0, b = 0) {
//   console.log(a + b);
// }
// sum(1, 2);

// // rest

// function abcd(...val) {
//   console.log(val);
// }
// abcd(1, 2, 4, 5, 6, 4, 8, 9, 10);

// function secondLargest(arr){
// let largest = 0;
// let secondlargest;
// for(let i = 0;i<arr.length;i++){
//  if(arr[i] > largest){
// largest = arr[i]
// }
// }
//  let difference = 0
// for(let i = 0 ; i<=arr.length;i++){
//     difference = largest - arr[i] ;

//     if(difference )
// }

// }

function removeDuplicates(arr) {
  let newarr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < newarr.length; j++) {
      if (arr[i] === newarr[j]) {
        continue;
      } else {
        newarr.push(arr[i]);
      }
    }
  }

  return newarr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
//removeDuplicates([7, 7, 7, 7]); // [7]
//removeDuplicates([1, 2, 3]); // [1, 2, 3]

// pure vs impure functions  aisa fucntion jo ki bahar ki vlaue ko na bdle wo hai pure fucnti0on
// aisa fucntion jo bahar ki value ko badal de sideeffect jinse ho wo hai impure fucntion

// clousers >>. ek fucntion jo return kre ek or fucntion or return hone wala fucntion hamesha use krega parent fucntion ka koi variable

function abcd() {
  let a = 12;

  return function () {
    console.log(a);
  };
}

let fn = abcd();
fn();

// lexical scoping

function abcd2() {
  let a = 12;
  function defg() {
    let b = 13;
    function ghij() {
      let c = 14;
      console.log(a + b + c);
    }
  }
}

// iffee
(function () {
  console.log("hi");
})();

// hoisting

function count(obj) {
  let count = 0;
  for (let keys in obj) {
    count++;
  }
  return count;
}

let cn = count({ a: 1, b: 2, c: 3 });
console.log(cn);

function doublevalues(obj) {
  for (let keys in obj) {
    console.log(obj[keys]);
  }
}
doublevalues({ a: 1, b: 2, c: 3 });

// practice fucntions

function createMultiplier(val) {
  let x = val;
  return function double(n) {
    return n * x;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 1

function createMultiplier(val) {
  let x = val;
  return function double(n) {
    return n * x;
  };
}
const triple = createMultiplier(3);
console.log(triple(5)); // 1

function counterwithTwo() {
  let count = 0;

  return {
    incrememt: () => {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
  };
}
let counter = counterwithTwo();
console.log(counter.incrememt());
console.log(counter.incrememt());
console.log(counter.decrement());

// write a BMI calculator

function BMI(weiight, height) {
  return Math.floor(weiight / (height * height)).toFixed(2);
}
console.log(BMI(105, 1.7));

// create a reusable calcuulator

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(1200));
console.log(twenty(1200));

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }
// let c = counter();
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

function outer() {
  var x = 10;
  function inner() {
    console.log(x);
    var x = 20;
    console.log(x);
  }
  inner();
}
outer();

/**Question: Closure with Delay

Write a function printNumbers(n) that:

Prints numbers from 1 to n.

Each number should print after 1 second * number.

Example for printNumbers(5):

1 (after 1 second)
2 (after 2 seconds)
3 (after 3 seconds)
4 (after 4 seconds)
5 (after 5 seconds)


⚡ Hint:

You’ll need to use setTimeout.

If you use var, it will fail because of function scope → closure fixes it. */

// function printNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1 * 1000); // delay increases with i
//   }
// }

// printNumbers(5);

// Callback function

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function calculate(a, b, Callback) {
  console.log(Callback(a, b));
}
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
