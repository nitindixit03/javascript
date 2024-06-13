class password{
    constructor(){
        console.log("welcome to password Generator")
        this.pass = ""
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890"
        let special = "!@#$%^&*()"
        if(len<3){
            console.log("Your password should be atleast 3 characters long")
        }
        else{
            let i=0;
            while(i<len){
                this.pass = this.pass + chars[Math.floor(Math.random() * chars.length)]
                this.pass = this.pass + numbers[Math.floor(Math.random() * numbers.length)]
                this.pass = this.pass + special[Math.floor(Math.random() * special.length)]
                i = i +3;
            }
            this.pass = this.pass.substr(0,len)
            return this.pass;
        }
    }
}

let p = new password()

let submitButton = document.getElementById('submitButton');

submitButton.onclick = function() {
let size = document.getElementById("number").value;
document.getElementById("result").textContent = "Password is: " + (p.generatePassword(size));

console.log(p.generatePassword(size))
};