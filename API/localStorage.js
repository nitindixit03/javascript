let key = prompt("Enter the key you want to see: ");
let value = prompt("Enter the value you want to see: ");

localStorage.setItem(key,value);

console.log(`the key is ${key} and value is ${value}`)

if(key == "red" || key == "blue"){
    localStorage.removeItem(key);
} 