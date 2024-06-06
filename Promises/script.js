
let promise = new Promise(function(resolve, reject){
    console.log("hello");
    resolve(56)
})


console.log("hello 1");

setTimeout(function(){
    console.log("hello 2 on 3 seconds");
},3000);

console.log("hello 3");
console.log(promise);