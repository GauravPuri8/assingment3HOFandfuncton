// create a function that generates a rendom number and print it to tha every 2 seconds

function randomNumberGenerator(){
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber)
}
function printwithInterval(){
    randomNumberGenerator();
    setInterval (randomNumberGenerator,2000);
}
printwithInterval();