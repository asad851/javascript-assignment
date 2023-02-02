let string = "";
for(let i = 0; i < 3; i++) { 
  for(let j = 0; j < 3; j++) { 
    if(j===0&&i===0||j===0||i===1&&j===1||i===2){
      string += "*";
    }
    else{
        string +=""}
    }
    string += "\n";
}

console.log(string);
// *
// **
// ***