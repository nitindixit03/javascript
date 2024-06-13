// console.log("Hello, world!");

for(let i=0;i<4;i++){
    setTimeout(()=>{
        console.log(i);
    },10)
}

for(var i=0;i<4;i++){
        setTimeout(()=>{
            console.log(i);
        },10)
    }

    // both will have different output