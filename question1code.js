//building an e-commerce website for calculate the total price


const orderList = [
    {name: "Laptop", price : 120000},
    {name: "Mobile", price : 70000},
    {name: "Mobile Charger", price : 1500},
    {name: "Laptop Charger", price : 10500},
];
let sum=0;
orderList.forEach((data)=>(sum+=data.price));
console.log(`The total price is Rs.${sum}`);

//output= The total price is Rs.202000