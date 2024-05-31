let runAgain = true;
while(runAgain){
let userInput = prompt("enter snake, water or gun").toLowerCase();

let computerInput = ["snake","water","gun"];
let index = Math.floor(Math.random()*computerInput.length);
let comp_choice = computerInput[index];

if (!computerInput.includes(userInput)) {
    alert("Invalid input. Please enter 'snake', 'water', or 'gun'.");
}
else if((userInput=='gun' && comp_choice=='snake') || (userInput=='water' && comp_choice=='gun') || (userInput=='snake' && comp_choice=='water')){
    alert("Congratulations!!,you won")
}
else if((userInput=='snake' && comp_choice=='snake') ||(userInput=='gun' && comp_choice=='gun') || (userInput=='water' && comp_choice=='water')){
    alert("ohh!!, it's Draw!!")
}
else{
    alert("computer won!!")
}
runAgain = confirm("do you want to paly again??");
}