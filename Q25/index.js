let weight =  prompt('enter your weight in kgs');
let height =  prompt('enter your height in meters');
const BMI = weight/height**2;
if(BMI < 18.5){
    console.log("Under weight");
}else if(BMI>=18.5 && BMI <= 24.9){
    console.log("Normal weight");
}else if(BMI>=25 && BMI<=29.9){
    console.log("Over Weight");
}else{
    console.log("Obese");
}
