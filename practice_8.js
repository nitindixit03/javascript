class complex{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(num){
        this.real = this.real + num.real;
        this.imaginary  = this.imaginary + num.imaginary;
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }
    set real(newReal){
        this._real = newReal
    }
    set imaginary(newImaginary){
        this._imaginary = newImaginary
    }
}
let a = new complex(2,4);
console.log(a.real,a.imaginary);
a.real = 10;
a.imaginary = 10;
let b = new complex(6,2);

a.add(b);
console.log(`${a.real}+${a.imaginary}i`)























// class human{
//     constructor(name,food){
//         this.name = name;
//         this.food = food;
//     }
//     walk(){
//         console.log(this.name + "is walking");
//     }
// }
// class student extends human{
//     walk(){
//         console.log(this.name + "is walking");
//     }
// }
// let o = new human("nitin ", "bhindi");
// o.walk();

// console.log( o instanceof human);