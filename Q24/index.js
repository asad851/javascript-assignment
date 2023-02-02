const even = [];
const odd  = [];
for(let i=0; i<101; i++){
    if(i%2==0){
        even.push(i);
    }else{
        odd.push(i);
    }

}
console.log(even,odd);