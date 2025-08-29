// 🔹 1. What is a Callback?

// A callback is simply a function passed as an argument to another function, which is then called later.

// function greet(name, callback) {
//   console.log("hello ", name);
//   callback();
// }

// greet("Nihal", () => {
//   console.log("Goodbye!");
// });

// console.log("start");

// setTimeout(() => {
//   console.log("Async task done!");
// }, 2000);

// console.log("end");

// Real World Example : Reading DAta

// function getUSerDAta(id, callback) {
//   console.log("fetching user Data ... ");

//   setTimeout(() => {
//     const user = { id: id, name: "nihal" };
//     callback(user);
//   }, 2000);
// }
// getUSerDAta(1, (val) => {
//   console.log("user received ", val);
// });

// CallBack Hell

function readfille(filename, callback) {
  console.log("start reading file darta ....");

  setTimeout(() => {
    console.log("reading done");
    callback(filename);
  }, 1000);
}

// readfille("notes.txt", (Data) => {
//   console.log("File read:", Data);
// });

function dowloadfile(file, callback) {
  console.log(file, "starting downloading ........");
  setTimeout(() => {
    console.log("Downloaded:", file);
    callback(file, callback);
  }, 1000);
}

function compressedfile(file, callback) {
  console.log("starting compressing....");

  setTimeout(() => {
    let comprressed = file + ".z";
    console.log("Compressed to:", comprressed);
    callback(comprressed);
  }, 2000);
}

function uploadFile(file, callback) {
  console.log("starting uploadin");

  setTimeout(() => {
    console.log("Uploaded:", file);
    callback();
  }, 1500);
}

// dowloadfile("file.txt", (file) => {
//   compressedfile(file, (compressedfile) => {
//     uploadFile(compressedfile, () => {
//       console.log("alll task done");
//     });
//   });
// });

function fetchuserData(user, callback) {
  console.log("started fetching data");

  setTimeout(() => {
    console.log("data fetched", user);
    callback(user); // pass user to next
  }, 1000);
}

function fetchuserOrders(orders, callback) {
  console.log("started fetching orders");

  setTimeout(() => {
    let ordersreceive = orders + " chai";
    console.log("orders fetched successfully:", ordersreceive);
    callback(ordersreceive);
  }, 1000);
}

function COnfirmationEmail(user, callback) {
  console.log("sending confirmation ....");

  setTimeout(() => {
    console.log("confirmation done for:", user);
    callback();
  }, 1000);
}

// Chaining them
fetchuserData("nihal", (user) => {
  fetchuserOrders("order1", (orders) => {
    COnfirmationEmail(user, () => {
      console.log("ALL Task Completed ✅");
    });
  });
});
