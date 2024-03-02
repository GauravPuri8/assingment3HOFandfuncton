/**let expenses =[
    { amount: 100, category:"utilities"},
    { amount: 200, category:"groceries"}
    {amount:, 50 , category:"entertainment"},
];*/
// calcuted tax for each expense

let expenses =[
    { amount: 100, category:"Utilities"},
    { amount: 200, category:"Groceries"},
    {amount:  50 , category:"Entertainment"},
];
let expensesWithTax= expenses.map((expense)=>{
    let tax = expense.amount*0.1;
    return{...expense,tax:tax};
});

console.log("Expenses with Tax:", expensesWithTax);
