let scores =  Math.floor(Math.random()*100);
if(scores>=90 && scores<=100){
    console.log(`the grade against the score ${scores} is A!`);
}
else if(scores>=70 && scores<=89){
    console.log(`the grade against the score ${scores} is B!`);
}
else if(scores>=60 && scores<=69){
    console.log(`the grade against the score ${scores} is C!`);
}
else if(scores>= 50 && scores<=59){
    console.log(`the grade against the score ${scores} is D!`);
}
else{
    console.log(`the grade against the score ${scores} is F!`);
};
