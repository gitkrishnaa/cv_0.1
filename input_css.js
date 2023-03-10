
//adding hide and show feature 
  //note-using calss which give array of elements
  const btn1=document.querySelectorAll(".inp_btn1");
const div1=document.querySelectorAll(".inp_div1_inner_div1");

console.log(btn1.length)
for(let i=0;i<btn1.length;i++){
btn1[i].addEventListener("click",()=>{
  if(div1[i].style.display=="none"){
    div1[i].style.display="block"
    // div1.style.transition="0.5s"
  }
  else{  div1[i].style.display="none"}

})
}
// for(let i in btn1){
//   btn1.keys()
//   console.log(btn1.i,"h")
//   if(typeof(i)===Number){
//     console.log(btn1.i)
//   }
//   else{
//     console.log(i)
//   }
 
// }


// btn1[0].addEventListener("click",()=>{
//   if(div1.style.display=="none"){
//     div1.style.display="block"
//     // div1.style.transition="0.5s"
//   }
//   else{  div1.style.display="none"}

// })