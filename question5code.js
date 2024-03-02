/**let expenses =[
    { amount: 100, category:"utilities"},
    { amount: 200, category:"groceries"},
    {amount: 50 , category:"entertainment"},
];*/
// total amount of all expenses
let expenses =[
    { amount: 100, category:"utilities"},
    { amount: 200, category:"groceries"},
    {amount: 50 , category:"entertainment"},
];
let totalExpenses= expenses.reduce((acc, expense)=>acc+ expense.amount,0);

console.log("Total expenses:",totalExpenses);
