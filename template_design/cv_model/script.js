 const large_main_div=document.getElementById("large_main_div")
  const small_main_div=document.getElementById("small_main_div")
  const setting=document.getElementById("setting")
  const range1=document.getElementById("range1")

  range1.addEventListener("input",()=>{
    large_main_div.style.width=`${range1.value/10*3}cm`
   
    large_main_div.style.height=`${range1.value/10*4}cm`
   
  })

function model1(html_display_div){
  const large_main_div=document.getElementById("large_main_div")
  const small_main_div=document.getElementById("small_main_div")
  const setting=document.getElementById("setting")
  const range1=document.getElementById("range1")

 
  //inspired from https://www.canva.com/design/DAFds5O4B9M/PYO9i5N4gA2H6X8IbhaBaw/edit
  const main_div=document.createElement("div");// main div created wher all item will depand
  main_div.style.backgroundColor="red";
  main_div.style.width="100%"
  main_div.style.height="100%"
 
 
  //name heading
  const head_name=document.createElement("div");
  main_div.appendChild(head_name)
  head_name.style.backgroundColor="rgb(244,244,244)";
  head_name.style.width="100%"
  head_name.style.height="20%"
  head_name.style.marginTop="5%"

  const span1=document.createElement("span");
  head_name.appendChild(span1)
  span1.innerText="Krishan Thkaur"
  span1.style.fontSize=``


  range1.addEventListener("input",()=>{
    large_main_div.style.width=`${range1.value/10*3}cm`
   
    large_main_div.style.height=`${range1.value/10*4}cm`
    span1.style.fontSize=`${range1.value()}`
  })
  
  html_display_div.innerHTML=main_div.outerHTML;
  // note-i am usng innerhtml instead of appendChild because innerhtml just replace everything thats what i want but append just adding
}

model1(large_main_div)
model1(small_main_div)