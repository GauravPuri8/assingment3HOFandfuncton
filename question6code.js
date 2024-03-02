/**
let expenses =[
    { amount: 100, category:"utilities"},
    { amount: 200, category:"groceries"},
    {amount: 50 , category:"entertainment"},
]; */
// categorized Expenses : [' Low Expenses', 'High Expenses', 'Low Expense']

let expenses = [

    { amount: 100, category:"utilities"},
    { amount: 200, category:"groceries"},
    {amount: 560 , category:"entertainment"},
    ];
    function categorizeExpense(expense){
        if (expense.amount>100){
            return"High expense";
        }else {
            return"Low Expense";

        }
    }
    let categorizedExpenses= expenses.map((expense)=>
    categorizeExpense(expense));
    console.log("Categorized Expenses:",categorizedExpenses);
    
