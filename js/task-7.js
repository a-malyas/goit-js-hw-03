let id = 0;
const getId = () => {
    return id++;
};
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
        return {
            id: getId(),
            type,
            amount,
        }
    },

    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    },

   withdraw(amount) {
        if (amount > this.balance) {
            console.log('Снятие такой суммы невозможно, недостаточно средств.');
            return;
        }
     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
     this.transactions.push(transaction);
     this.balance -= amount;   
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (id === transaction.id) {
                return transaction;
            }
        }
    },

    getTransactionTotal(type) {
        let total = 0;
        for (const transaction of this.transactions) {
            if (type === transaction.type) {
                total += transaction.amount;
            }
        }
        return total;
    },
};

// const balance = console.log(account.getBalance());
// console.log(account.getBalance());

// account.deposit(1000);
// console.log(account.getBalance());

// account.withdraw(200);
// account.withdraw(300);
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.table(account.transactions);

// const transactionId = account.transactions[0].id;
// console.table(account.getTransactionDetails(transactionId));