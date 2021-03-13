window.onload = () =>{
    let button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI);
}
function calculateBMI(){

    let Height = parseInt(document.querySelector('#Height').value);
    let Weight = parseInt(document.querySelector('#Weight').value);
    let result = document.querySelector('#result');


if(Height<=0){
    result.innerHTML = 'Ivalid height!!';
}
else if(Weight<=0){
    result.innerHTML = 'Invalid weight';
}
else{
    let BMI=(Weight)/((Height*Height)/10000);
    if(BMI < 18.6){
        result.innerHTML = `Underweight:${BMI}`;
    }
    else if( BMI>= 18.6 && BMI < 24.9){
        result.innerHTML=`Normal:${BMI}`;
        }
    else{
            result.innerHTML = `Over Weight : ${BMI}`;
         }
}
}