let username = {
  firstname: "Nihal",
  lastname: "sandhu",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + " " + state
  );
};

printFullName.call(username, "Una", "himachal");

let username2 = {
  firstname: "sachin",
  lastname: "Tendulkar",
};

// using call method we can boroow function its called function borrowing
printFullName.call(username2, " mumbai", "Maharshtra");

// The Appply MEthod
// the only differnece betweeen is the way be pass the arguments
printFullName.apply(username2, [" mumbai", "Maharshtra"]);

//  bind method it will create a copy of printfullname it will bound that to object and then return us a function or method which can be called later

let printMyName = printFullName.bind(username2, " mumbai", "Maharshtra");
printMyName();

function countDigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(12345)); // Output: 5
console.log(countDigits(7)); // Output: 1
console.log(countDigits(987654)); // Output: 6
