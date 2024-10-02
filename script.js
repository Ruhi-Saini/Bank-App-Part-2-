let balance = 0;
let totalIncome = 0;
let totalExpense = 0;

const balanceAmount = document.getElementById('balance-amount');
const totalIncomeEl = document.getElementById('total-income');
const totalExpenseEl = document.getElementById('total-expense');
const transactionForm = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');

transactionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const type = document.getElementById('transaction-type').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const transaction = {
        type,
        description,
        amount
    };

    addTransaction(transaction);
    updateBalance(transaction);
    updateTransactionList(transaction);
    transactionForm.reset();
});

function addTransaction(transaction) {
    if (transaction.type === 'income') {
        totalIncome += transaction.amount;
        balance += transaction.amount;
    } else {
        totalExpense += transaction.amount;
        balance -= transaction.amount;
    }
}

function updateBalance() {
    balanceAmount.textContent = `₹${balance.toFixed(2)}`;
    totalIncomeEl.textContent = `₹${totalIncome.toFixed(2)}`;
    totalExpenseEl.textContent = `₹${totalExpense.toFixed(2)}`;
}

function updateTransactionList(transaction) {
    const li = document.createElement('li');
    li.innerHTML = `${transaction.description} - ₹${transaction.amount.toFixed(2)} <span>${transaction.type}</span>`;
    transactionList.appendChild(li);
}

  