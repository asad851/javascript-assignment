let months = ['January','February','March','April','May','June','July','August','Semptember','October','November','December'];
let chosenMonth = months[Math.floor(Math.random()*months.length)];
if(chosenMonth=='September' || chosenMonth=='October'|| chosenMonth=='November' ){
    console.log('The season is Autumn')

}
if(chosenMonth=='December' || chosenMonth=='January'|| chosenMonth=='February' ){
    console.log('The season is Winter')

}
if(chosenMonth=='March' || chosenMonth=='April'|| chosenMonth=='May' ){
    console.log('The season is Spring')

}
if(chosenMonth=='June' || chosenMonth=='July'|| chosenMonth=='August' ){
    console.log('The season is Summer')

}


