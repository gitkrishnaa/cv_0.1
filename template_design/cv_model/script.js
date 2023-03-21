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
  // main_div.style.backgroundColor="red";
  main_div.style.width="100%"
  main_div.style.height="100%"
 
//design format
/**
 * name and image will be in section 1
 * alll detaillike expernic,skaill,profile etc in section 2
 * where contact will be 2.1
 * profile will be
 */



 //section 1111111111111111111111111111111111 name and image will be in this div
  //name heading
  const user_name_div=document.createElement("div");
  main_div.appendChild(user_name_div)
  user_name_div.style.backgroundColor="rgb(244,244,244)";
  user_name_div.style.width="100%"
  user_name_div.style.height="150px"
  user_name_div.style.marginTop="5%"

  user_name_div.style.display="flex"
  user_name_div.style.padding="20px"
  user_name_div.style.boxSizing="border-box"


  user_name_div.style.justifyContent="space-between"



  //text resizing..................................................................................
 //****** */ note (important)
//text size will depand on range1 value,first i have use percentage but it not working as expected
//all text resizeing will be (range1.value)px example 5px 45px etc

//text creating phase
const name_div=document.createElement("div");
  user_name_div.appendChild(name_div)
  
  const span1=document.createElement("h1");
  name_div.appendChild(span1)
  span1.innerText="Krishan Thkaur"

  const span2=document.createElement("p");
  name_div.appendChild(span2)
  span2.innerText="WEB "+" "+" "+"DEVELOPER "
  // span1.style.fontSize=`5vw`

  const user_image_div=document.createElement("div");
  user_name_div.appendChild(user_image_div);
  user_image_div.style.width="130px";
  user_image_div.style.height="130px";
  // user_image_div.style.border="2px solid purple"
  user_image_div.style.borderRadius="100px";
  user_image_div.style.marginTop="30px";
  user_image_div.style.marginRight="20px";

  user_image_div.style.backgroundColor="silver"
  user_image_div.style.boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"

  // section 2
  const user_details_div=document.createElement("div");
  main_div.appendChild(user_details_div)
  user_details_div.style.backgroundColor="rgb(244,244,244)";
  user_details_div.style.width="100%"
  user_details_div.style.minHeight="150px"
  user_details_div.style.marginTop="50px"

  // user_details_div.style.padding="20px"
  user_details_div.style.boxSizing="border-box"
  user_details_div.style.justifyContent="space-between"

 
  const div1=document.createElement("div");
  user_details_div.appendChild(div1)
  div1.style.backgroundColor="red";
  div1.style.width="100%"
  div1.style.minHeight="150px"



  const div2=document.createElement("div");
  user_details_div.appendChild(div2)
  div2.style.backgroundColor="black";
  div2.style.width="100%"
  div2.style.minHeight="150px"
  div2.style.display="flex"
  

  const div2_1=document.createElement("div");
  div2.appendChild(div2_1)
  div2_1.style.backgroundColor="grey";
  div2_1.style.width="100%"
  div2_1.style.minHeight="150px"



  const div2_2=document.createElement("div");
  div2.appendChild(div2_2)
  div2_2.style.backgroundColor="green";
  div2_2.style.width="100%"
  div2_2.style.minHeight="150px"



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////////////////////////////
  // note->to dispaly range value
{  const display_range_value_span= document.querySelector("#display_range_value_span")
 display_range_value_span.innerText=range1.value}
//

// resize will not be fuction it will be add in future
  range1.addEventListener("input",()=>{
    display_range_value_span.innerText=range1.value
    large_main_div.style.width=`${range1.value/10*3}cm`
    large_main_div.style.height=`${range1.value/10*4}cm`
    html_display_div.innerHTML=main_div.outerHTML;
  })
  

  // note-i am usng innerhtml instead of appendChild because innerhtml just replace everything thats what i want but append just adding
  html_display_div.innerHTML=main_div.outerHTML;
}

model1(large_main_div)
model1(small_main_div)