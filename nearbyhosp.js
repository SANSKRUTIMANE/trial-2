window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click',GiveAdvice );
}

function GiveAdvice(){
   var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
let result1=document.querySelector('#result1');
let result2=document.querySelector('#result2');
let result3=document.querySelector('#result3');
let result4=document.querySelector('#result4');
let result5=document.querySelector('#result5');

var Delhi=document.getElementById("City1");
var Jaipur=document.getElementById("City2");
var Chennai=document.getElementById("City3");
var Allahabad=document.getElementById("City4");
var Kolkata=document.getElementById("City5");
if (Delhi.checked==true){
    result1.innerHTML="*All India Institute Of Medical Sciences (AIIMS) Ansari Nagar in Delhi*";
}
 if(Jaipur.checked==true){
    result2.innerHTML="*Ramchandra Bhatt Marg, Mazgaon, Mumbai, Maharashtra 400008 *";
}
 if(Chennai.checked==true){
    result3.innerHTML="*Government General Hospital Poonamallee High Road, Park Town, Chennai-600003*";
}
 if(Allahabad.checked==true){
    result4.innerHTML="*Government Hospital Prayagraj, Prayagraj, Uttar Pradesh*"
}
if (Kolkata.checked==true){
    result5.innerHTML="*88, College Street, Calcutta Medical College, College Square, Kolkata, West Bengal*";
 
}
}