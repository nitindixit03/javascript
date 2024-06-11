let sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is a versatile programming language.",
    "Arrays are useful for storing multiple values.",
    "Coding can be both fun and challenging.",
    "Practice makes perfect when learning new skills."
];

let a = document.getElementById("messages");


const wait = async(seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },seconds*1000);
    })
}

const run = async(message)=>{
    await wait(2);
    a.innerHTML = a.innerHTML + message + "<br>";
}

const start = async()=>{
    for(let i = 0;i<sentences.length;i++){
       await run(sentences[i]);
    }
}
start();