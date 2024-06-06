
// let promise = new Promise(function(resolve, reject){
//     console.log("hello");
//     resolve(56)
// })


// console.log("hello 1");

// setTimeout(function(){
//     console.log("hello 2 on 3 seconds");
// },3000);

// console.log("hello 3");
// console.log(promise);



let p1 = new Promise((resolve,reject) => {
    console.log("promise is pending");
    setTimeout(()=>{
        // console.log("I am a Promise and I am fulfilled");
        resolve(true);
    },5000)
});

let p2 = new Promise((resolve,reject) => {
    console.log("promise is pending");
    setTimeout(()=>{
        // console.log("I am a Promise and I am rejected");
        reject(new Error("i am an error"));
    },5000)
});

// console.log(p1,p2);

p1.then((value)=>{
    console.log(value);
});

p2.catch((error)=>{
    console.log("some error in p2")
})