var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var totalCharacters = prompt("How many characters do you need (8-128)?");

  var typesOfCharacters = {
  "uppercaseValues" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "lowercaseValues" : "abcdefgfijklmnopqrstuvwxyz",
  "symbolsValues" : "~!@#$%^&*()_+"
  }

  var confirmLowercase= confirm("Do you want lowercase letters?");

  var confirmUppercase= confirm("Do you want uppercase letters?");

  var confirmNumbers= confirm("Do you want numbers?");

  var confirmSymbols= confirm("Do you want special characters?");

  console.log (totalCharacters);
  console.log ("U:" + confirmUppercase);
  console.log ("L:" + confirmLowercase);
  console.log ("#:" + confirmNumbers);
  console.log ("S:" + confirmSymbols);


  var possibleCharacters = [];

  if (confirmUppercase) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.uppercaseValues.split(""));
  }

  if (confirmLowercase) {
    possibleCharacters= possibleCharacters.concat(typesOfCharacters.lowercaseValues.split(""));
  }

  if (confirmNumbers) {
    for (var i = 0; i<10; i++) {
      possibleCharacters.push(i);
    }

  }

  if (confirmSymbols) {
    possibleCharacters= possibleCharacters.concat(typesOfCharacters.symbolsValues.split(""));

  }

  console.log(possibleCharacters);

  var password ="";

  for (var i=0; i< totalCharacters; i++) {
    var position = Math.floor(Math.random() *possibleCharacters.length);
    password= password + possibleCharacters[position];
  }

  return password;
}

function writePassword() {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
  generateBtn.addEventListener("click", writePassword);




