// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

let i = 1;
while (i <= 15) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}

// check vowels
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] === "a" ||
//     str[i] === "A" ||
//     str[i] === "e" ||
//     str[i] === "E" ||
//     str[i] === "i" ||
//     str[i] === "I" ||
//     str[i] === "o" ||
//     str[i] === "O" ||
//     str[i] === "u" ||
//     str[i] === "U"
//   ) {
//     count++;
//   }
// }
// console.log(count);

// 📝 Question:
// Write a function reverseWords that takes a sentence as a string and returns a new string where each word is reversed, but the word order stays the same.
// reverseWords("Hello World");
// Output: "olleH dlroW"

// reverseWords("JavaScript is fun");
// Output: "tpircSavaJ si nuf"

function reverseStr(str) {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }

      result += " ";
      word = "";
    }
  }
  for (let j = word.length - 1; j >= 0; j--) {
    result += word[j];
  }
  return result;
}

let input = "hello world"; // changed variable name
console.log(reverseStr(input));

for (let i = 1; i < 101; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// skips multiply of three

for (let i = 1; i < 21; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

