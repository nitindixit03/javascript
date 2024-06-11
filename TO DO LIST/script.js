submit.addEventListener("click",(e)=>{
    e.preventDefault();

    let titlec = title.value;
    let descc = desc.value;

    localStorage.setItem("todo", [titlec, descc])

    todo.innerHTML = ` <h1>${titlec}</h1>       <p>${descc}</p>`

    title.value = ""
    desc.value = ""

    
})

deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.removeItem("todo");
    todo.innerHTML = " ";
})