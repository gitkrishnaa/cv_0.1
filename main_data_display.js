// input data store in object - the central data sharing and all design also threre

const obj={

  section1:{//persanal info 
name:"random ,random",0:"",
mobile:9708749828,1:"",
email:"kris@gmail.com",2:"",
dob:"1/1/2000",3:"",
face_image:"",4:"",
  }
}

const show_data=document.getElementById("show_data1")
show_data.addEventListener("click",()=>{console.log(obj.section1)})
//section1 
const html_section1=document.querySelectorAll(".section1")
console.log(html_section1)
for(let i=0;i<html_section1.length;i++){
  console.log(html_section1[i])
  obj.section1[i]="hello";
  console.log(obj)


  html_section1[i].addEventListener("input",()=>{
    console.log(html_section1[i].value)

    obj.section1[i]=html_section1[i].value




  })
}

// design option section
const design_div=document.getElementById("design1")



function design1(){
  const main_div1=document.createElement("div");
  design_div.appendChild(main_div1);
  main_div1.style.width="280px";
  main_div1.style.height="350px";
  main_div1.style.margin="10px";

  main_div1.style.backgroundColor="red";
  console.log("hello");


  main_div1.addEventListener("click",()=>{
const display_selected_template_in_main=document.getElementById("display")
display_selected_template_in_main.innerHTML=main_div1.outerHTML
  })
   }
   
function design2(){
  const main_div1=document.createElement("div");
  design_div.appendChild(main_div1);
  main_div1.style.width="280px";
  main_div1.style.height="350px";
  main_div1.style.backgroundColor="yellow";
  console.log("hello");
  main_div1.style.margin="10px";

  main_div1.addEventListener("click",()=>{
    const display_selected_template_in_main=document.getElementById("display")
    
    const div_main_to_display=document.createElement("div");
    div_main_to_display.style.width="90%"
    div_main_to_display.style.height="90%"
    div_main_to_display.style.backgroundColor="white";
    display_selected_template_in_main.innerHTML=div_main_to_display.outerHTML
    // display_selected_template_in_main.appendChild(div_main_to_display)
    
    



    
    
 

      })
   }
function design3(){
    const main_div1=document.createElement("div");
    design_div.appendChild(main_div1);
    main_div1.style.width="280px";
  main_div1.style.height="350px";
    main_div1.style.backgroundColor="yellow";
    console.log("hello");
    main_div1.style.margin="10px";
     }
     function design4(){
      const main_div1=document.createElement("div");
      design_div.appendChild(main_div1);
      main_div1.style.width="280px";
      main_div1.style.height="350px";
      main_div1.style.backgroundColor="yellow";
      console.log("hello");
      main_div1.style.margin="10px";
       }
const obj_design_option=[
 design1(),
 design2(),
 design3(),
 design4(),
 design1(),
 design2(),
 design3(),
 design4(),
 design1(),
 design2(),
 design3(),
 design4(),
 design1(),
 design2(),
 design3(),
 design4(),
]


obj_design_option.forEach((a)=>{
  console.log(a)

})
