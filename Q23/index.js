let number = Math.floor(Math.random()*100);
let isPrime = true ;
if(number==1){
    console.log('1 is neither a composite nor a prime number')
}
else if(number>1){
    for(i=2; i<number; i++){
        if(number % i == 0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`the number ${number} is a prime number`)
    }else{
        console.log(`the number ${number} is not a prime number`)
    }
}
else{
    console.log('the number is not a prime number')
}






