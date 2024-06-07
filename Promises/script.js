
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



// let p1 = new Promise((resolve,reject) => {
//     console.log("promise is pending");
//     setTimeout(()=>{
//         // console.log("I am a Promise and I am fulfilled");
//         resolve(true);
//     },5000)
// });

// let p2 = new Promise((resolve,reject) => {
//     console.log("promise is pending");
//     setTimeout(()=>{
//         // console.log("I am a Promise and I am rejected");
//         reject(new Error("i am an error"));
//     },5000)
// });

// // console.log(p1,p2);

// p1.then((value)=>{
//     console.log(value);
// });

// p2.catch((error)=>{
//     console.log("some error in p2")
// })


//PROMISE CHANING


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolved after 2 seconds")
//     },2000)
//     resolve(56);
// })

// p1.then((value) => {
//     console.log(value);

//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Promise-2")
//         },2000)
//     })
//     return p2;
// }).then((value)=>{
//     console.log(value);
//     return 2;
// }).then((value)=>{
//     console.log("finally done!!");
// })



// ATTACHING MULTIPLE HANDLING

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(2);
//     },2000);
// })

// p1.then(()=>{
//     console.log("congratulation this promise is now resolved!!!")
// });

// p1.then(()=>{
//     console.log("hurray!!")
// });

// PROMISE API

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value-1");
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value-2");
        // reject(new Error("error"));
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value-3");
    },3000)
})

// p1.then((value)=>{
//     console.log(p1);
// })

// p2.then((value)=>{
//     console.log(p2);
// })

// p3.then((value)=>{
//     console.log(p3);
// })

// make all these promise so that it all come at a same time

// let promise_all = Promise.all([p1,p2,p3])   // it will give an array after 3 seconds
//                                             // but if any one of them having error then it won't work. but if we want to make we can use Promise.allSettled()

// promise_all.then((value)=>{
//     console.log(value);
// })

// let promise_al = Promise.allSettled([p1,p2,p3])   // it will give an array after 3 seconds
                                           

// promise_al.then((value)=>{
//     console.log(value);
// })

//  Promise.race(promise) give only one value which resolve first  or reject first it will give that value only!! 
// Promise.any(promise)  (which comes first)give only one value that value will be resolve  but if error comes it will move to next one but if  all are carring error it will show an Aggregate Error.
// Promise.resolve(value) give resolve value
// Promise.reject(error) give reject value