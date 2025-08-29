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




