let t1=document.getElementById("template1")
let t2=document.getElementsByClassName("cls1")
console.log(t1.innerHTML)
console.log(t1.outerHTML)
console.log(t2[0].innerHTML)

let x=t1.innerHTML
let t3=document.getElementById("display")


let div1=document.createElement("div");
t3.appendChild(div1)

div1.innerHTML=t1.innerHTML



