let string="";
for(let i = 0; i <3; i++) {
      for(let j = 0; j < 5; j++) { 
        if(i===0 && j===2 ||j===2 ){
          
          string += "*";
        }
        else{
          if(i===2||i===1&&j===1||i===1&&j===3){
            string +="*"
          }
          else{
            string += " "
          }
        }
    }
      string += "\n";
    }
    console.log(string);
//      *  
//     ***
//    *****