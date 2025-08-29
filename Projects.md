### \*\* <h1>To-Do List</h1>

    <input type="text" id="taskInput" placeholder="Enter a task">
    <button id="addBtn">Add Task</button>

    <ul id="taskList"></ul>
    <!-- <script src="index.js"></script> -->
    <script>

        let input = document.getElementById("taskInput")
        let btn = document.getElementById("addBtn")
        let list = document.getElementById("taskList")

        btn.addEventListener('click', function () {
            let value = input.value;
            let li = document.createElement("li")
            li.innerText = value;
            list.appendChild(li)
            input.value = "";
        })

        let li = document.getElementsByName("li")
        li.addEventListener('click', function () {
            list.removeChild(li)
        })

### Calculatoor let display = document.getElementById("display");

        let num = document.querySelectorAll(".num")
        let operations = document.querySelectorAll(".op")
        let equal = document.getElementById("equal")
        let clear = document.getElementById("clear")


        num.forEach(function (button) {
            button.addEventListener('click', (e) => {
                display.value += e.target.innerText; // append clicked number to display
            });
        });

        operations.forEach(function (button) {
            button.addEventListener('click', (e) => {
                display.value += e.target.innerText; // append operator to display
            });
        });

        equal.addEventListener('click', function () {
            if (display.value !== "") {
                display.value = eval(display.value); // calculate the expression
            }
        })
        clear.addEventListener('click', function () {
            display.value = "";
        });

### <h1>Expense Tracker</h1>

  <div id="balance">Balance: ₹0</div>
  <div id="income">Income: ₹0</div>
  <div id="expense">Expense: ₹0</div>

  <input type="text" id="text" placeholder="Enter description">
  <input type="number" id="amount" placeholder="Enter amount">
  <button id="add">Add Transaction</button>
  <select id="type">
    <option value="income">Income</option>
    <option value="expense">Expense</option>
  </select>

  <h3>History</h3>
  <ul id="list"></ul>

  <script>




    let balance = document.getElementById("balance");
    let income = document.getElementById("income");
    let expense = document.getElementById("expense");
    let text = document.getElementById("text");
    let amount = document.getElementById("amount");
    let type = document.getElementById("type");
    let addBtn = document.getElementById("add");
    let list = document.getElementById("list");

    let transactions = [];

    addBtn.addEventListener("click", function () {
      let desc = text.value;
      let amt = Number(amount.value);

      if (desc === "" || amount.value === "") {
        alert("Please enter description and amount");
        return;
      }

      if (type.value === "expense") {
        amt = -amt;
      }
      let transaction = { id: Date.now(), desc, amt };
      transactions.push(transaction);

      addTransactionDOM(transaction);
      updateValues();

      text.value = "";
      amount.value = "";
      type.value = "income";
    });

    function addTransactionDOM(transaction) {
      let li = document.createElement("li");
      li.innerHTML = `${transaction.desc} <span>${transaction.amt}</span>`;
      list.appendChild(li);
    }

    function updateValues() {
      let amounts = transactions.map(t => t.amt);
      let total = amounts.reduce((acc, item) => acc + item, 0);
      let incomeTotal = amounts.filter(a => a > 0).reduce((acc, item) => acc + item, 0);
      let expenseTotal = amounts.filter(a => a < 0).reduce((acc, item) => acc + item, 0);

      balance.innerText = `Balance: ₹${total}`;
      income.innerText = `Income: ₹${incomeTotal}`;
      expense.innerText = `Expense: ₹${expenseTotal}`;
    }
