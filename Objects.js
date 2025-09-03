const a = { x: 1 };
const b = Object.create(a);

console.log(b.x);
a.x = 5;
console.log(b.x);
