// let a = prompt("Enter your present age!!"); 
// a = Number.parseInt(a);
// if (a < 0) {
//     alert("This is a invalid age"); 
// } else if(a>0 && a<17){
//     alert("you are kid"); 
// }
// else{
//     alert("you can drive");
// }


//SWITCH STATEMENT

let age = 15;

switch (age) {
    case (age > 18):
        console.log("Eligible for vote");
        break;
    default:
        console.log("Not eligible for vote");
}
// ternary operator
let a=12;
console.log("you can", a>18? "drivr" : "not drive")