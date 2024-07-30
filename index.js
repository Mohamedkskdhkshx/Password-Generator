const characters =
[   "A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", 
    "9","~","`","!","@","#","$","%","^","&",
    "*","(",")","_","-","+","=","{","[","}",
    "]",",","|",":",";","<",">",".","?","/"
];

let btnPass1 = document.getElementById("btn-pass1")
let btnPass2 = document.getElementById("btn-pass2")
let btnGene = document.getElementById("btn-gene")

let passwordOne ="" 
let passwordTwo ="" 
function EmptyFild(){
    btnPass1.textContent = ""
    btnPass2.textContent = ""
    passwordOne ="" 
    passwordTwo ="" 
}
function generatePassword(){
    EmptyFild()
    for(let i = 0 ; i<15;i++){
         passwordOne += characters[Math.floor(Math.random()*characters.length)] 
         passwordTwo += characters[Math.floor(Math.random()*characters.length)] 
    }
    btnPass1.textContent = passwordOne
    btnPass2.textContent = passwordTwo
 
}


function newPassword(){
    EmptyFild()
    generatePassword()
    
}



function copyPass1() {
    // Get the text field
    var copyText = document.getElementById("btn-pass1").textContent;
    navigator.clipboard.writeText(copyText);

    btnPass1.textContent = "copied"
    
  }
function copyPass2() {
    // Get the text field
    var copyText = document.getElementById("btn-pass1").textContent;
    navigator.clipboard.writeText(copyText);

    btnPass2.textContent = "copied"
    
  }
