async function weather(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve("30 degree")
        },5000)
    })

    let mumbaiWeather = new Promise((resolve,reject)=>{
        setInterval(()=>{
            resolve("25 degree")
        },8000)
    })

    // delhiWeather.then((x)=>{       //or delhiweather.then(alert) this will also work
    //      alert(x);
    // })
    // mumbaiWeather.then((x)=>{
    //     alert(x);
    // })

//in these case first hello will come to console and then alert will work
// but by using await in function we can actually stop the function untill it compleates its all work inside the function complete.

    console.log("fetching delhi weather please wait");
    let delhiW = await delhiWeather;

    console.log("fetched delhi weather " + delhiW);

    console.log("fetching mumbai weather please wait");
    let mumbaiW = await mumbaiWeather;
    console.log("fetched mumbai weather " + mumbaiW);

    return[delhiW,mumbaiW];




}

console.log("welcome to weather control room!!");

const hey = ()=>{
    console.log("i will not wait...")
}



let a = weather();
let b = hey();
a.then((value)=>{
    console.log(value);
})

// if we want to run weather function first fully then hey( ) should run for that here also we can use await

// const random = async()=>{
//     let a = await weather();
//     let b = await hey();

// }

// let c = random();
// c.then((value)=>{
// console.log(value)
// })
