const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



document.getElementById("getValue").addEventListener("input", setName);
document.getElementById("btn").addEventListener("click", selectName);

document.getElementById("getValue").max = (Math.pow(26,6)-1);


function setName() {
   let val = document.getElementById("getValue").value;
    
   document.getElementById('showName').innerHTML = "Oppgi navn: " + getWords(val);
}

function selectName(){
    let val = document.getElementById("getValue").value;
    
    alert("Name selected: " + getWords(val));
    
}

//log base 26 +1 to find length of number in log26
function getWordLength(x){
    return Math.floor(Math.log(x)/Math.log(26)+1);
}

//convert number to letter
function getWords(x){
    //was unable to figure out the math
    //problem with leading a
    //so i added if's to take care of exepcions...
    //my brain was to dumb to solve
    //please send me the solution, i want to know
    if(x == 0){
        return alphabet[0];
    }
    let outStr = "";
    let val = 0;
    let length = getWordLength(x);
    for(let i = 0; i < length; i++){
        val = x%(26);
        
        if(x == 26){
            outStr = alphabet[0] + outStr;
            x = 0;
        }else{
            x = x - val;
            x = x/(26);
            outStr = alphabet[val] + outStr;
        }
    }
    
    return outStr;
}

//run at start
window.addEventListener("DOMContentLoaded", (event) => setName());