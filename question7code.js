// during tha iteration, double the value of each number
//let originalNumbers =[2,5,8,10,3];

let originalNumbers= [2,5,8,10,3];
originalNumbers.forEach((number , index , array)=>{
    array[index]= number* 2;

});
console.log("Doubled Numbers:",originalNumbers);
