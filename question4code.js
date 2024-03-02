/**let expenses =[
    { amount: 100, category:"utilities"},
    { amount: 200, category:"groceries"}
    {amount:, 50 , category:"entertainment"},
];*/
// ues tha filter method 
let expenses =[
    { amount: 100, category:"Utilities"},
    { amount: 200, category:"Groceries"},
    {amount: 50 , category:"Entertainment"},
];
let groceriesExpenses= expenses.filter(
    (expense)=>expense.category==="Groceries"

);
console.log("Groceries Expenses:", groceriesExpenses);



