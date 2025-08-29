let promise = new Promise((res, rej) => {
  res("hello");
});

promise.then((val) => {
  console.log(val);
});
