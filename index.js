// // const url = 'https://api.thecatapi.com/v1/images/search';
let id = document.querySelector("h2");
let button = document.querySelector("button");
// id.src = "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
let src1= "https://api.chucknorris.io/jokes/random";

// let a = async ()=>{
//   let value = await fetch(src);
//   console.log(value);
//   let data = await value.json();
// //   console.log(data.url)
// id.src = data.url
// // console.log(id.src)
// }
// console.log(a())

function b(){
    fetch(src1).then((value)=>{
        return value.json()
    }).then((data)=>{
        id.innerText = data.value
        console.log(data.value)
    })
   
}
button.addEventListener('click',()=>{
    console.log(b());
})
