function sayHello() {
  console.log("hello");
}
sayHello();

function square(x) {
  console.log(x * x);
}
square(8);

function isEven(n) {
  if (n % 2 === 0) {
    console.log(" true The number is even");
  }
}
isEven(9);

function average(a, b, c) {
  let sum = a + b + c;
  let avg = sum / 3;
  console.log(avg);
}
average(40, 50, 85);

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
findLargest(8, 5, 9);
