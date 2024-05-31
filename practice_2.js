let runAgain = true;

const canDrive = (age) =>{
    return age>=18? true : false 
 }
while(runAgain){ 
let age = prompt("enter your age")
age = Number.parseInt(age);

if(age<0){
    console.error("please enter the valid age!!");
    document.body.style.backgroundColor= "yellow";
    break;
}
// if(age>4){
//     location.href = "https://google.com"
// }
if(canDrive(age)){
    alert("you can drive");
    document.body.style.backgroundColor = "green";
}
else{
    alert("you cannot drive");
    document.body.style.backgroundColor = "red";
}
runAgain = confirm("do you want to play again??")
}

// let color = prompt("enter the page background color")
// document.body.style.background = color;