// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// let response = fetch(url)

// response.then((value)=>{
//     return value.json()
// }).then((value)=>{
//     console.log(value);
//     // for(item in value){
//     //     console.log(value.item);
//     // }
// })


// cardContainer.innerHTML = "AllCards"


let a = prompt("enter your note");


if(a){
    localStorage.setItem("note", a)
}

let n = localStorage.getItem("note");
alert("your note is " + n)


let c = confirm("do you want to delete your note")
if(c){
    localStorage.removeItem("note");
    alert("note deleted succesfully!!")
}