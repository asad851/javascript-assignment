let validAge = prompt('enter your age');
drivingAge();
function drivingAge(){
    if(validAge==18){
        alert('You can drive!');
    }else{
        alert(`You are not eligible to drive. wait for ${18 - validAge} years to drive!`)
    }
};
