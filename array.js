
let arr = [1,2,3,4,5]
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }

 let ans = arr.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(ans)