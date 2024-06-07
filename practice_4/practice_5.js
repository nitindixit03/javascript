// 1st question

// const loadscript = async(src)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src + " succesfully done")
//         }
//         document.head.append(script);
//     })
// }

// let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(new Date().getMilliseconds())
//     console.log(value);
//     console.log(new Date().getMilliseconds())
// });

// 2nd question
// const run = async()=>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a);
//     console.log(new Date().getMilliseconds())
// }
// run();

//3rd question

// let run1 = async(a)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("wapas ache se code likho!!"))
//         },3000);
//     })
// }


// let run = async()=>{
//     try{
//         let a = await run1();
//         console.log(a);
//     }
//     catch(err){
//         console.log(err);
//         console.log("this errror has been handled!!");
//     }
// }
// run();

