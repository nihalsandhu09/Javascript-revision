// Arrays are hetergenous in javascript

// let arr = [1, 2, 4, 5, 8, 7];

// arr.push(7);
// console.log(arr);

let arr = [1, 2, 3, 4];
arr.push(5); // Add to end
// arr.pop(); // Remove last
// arr.shift(); // Remove first
// arr.unshift(0); // Add to start
// arr.splice(1, 2); // Remove 2 items starting at index 1
let newarr = arr.slice(0, 3);
arr.reverse();
console.log(arr);
console.log(newarr);

let arr1 = [1, 2, 1, 5, 4];
let sr = arr1.sort((a, b) => a - b);
console.log(arr1);
console.log(sr);

// forEch
let arrrr = [11, 62, 4, 5, 25];
arrrr.forEach(function (val) {
  console.log(val + 5);
});
console.log(arrrr);

// map sirf tab use krana hai jab aapko ek naya arrayt  bnanan hai pichle array ke data ke basis par
// map dikhte hi saath man mein ek blank array bana lia karo

let newarrr1 = [1, 2, 4, 5, 5, 5, 5, 5];
let map = newarrr1.map((val) => val * 5);
console.log(map);

// filter

/***
 * 🔹 Question 1 (Easy → Warm-up)

Given an array of numbers, return a new array with each number doubled using map.

Example:

[1, 2, 3, 4]  ➝  [2, 4, 6, 8]
*/
function double(arr) {
  let doubled = arr.map((i) => i * 2);
  return doubled;
}
console.log(double([1, 2, 3, 4]));
/*
🔹 Question 2 (Medium)

Given an array of numbers, return only the even numbers using filter.

Example:

[1, 2, 3, 4, 5, 6]  ➝  [2, 4, 6]

*/

function filterEven(arr) {
  let even = arr.filter((i) => i % 2 === 0);
  return even;
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));
/*
🔹 Question 3 (Medium-Hard)

Given an array of numbers, return the sum of all numbers using reduce.

Example:

[1, 2, 3, 4]  ➝  10

 */

function sumArray(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));

// chaining methods

function callbackchaining(arr) {
  let output = arr
    .map((i) => i * 2)
    .filter((i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
  console.log(output);
}
callbackchaining([1, 2, 3, 4, 5, 6]);
