// VARIBILE DECLERATION
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharater = [
  "!",
  "#",
  "$",
  "%",
  "&",
  ",",
  "(",
  ")",
  "*",
  "+",
  "'",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "'",
  "{",
  "}",
  "|",
  "~",
];

// Get references to the #generate element   lowercase, uppercase, numeric, and/or special characters
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var randomArray = [];

  var characterLength = prompt(
    "How many Characters would you like to include in your password? \n (Min legenth is 8 and the Max legenth is 128)"
  );
  
  if (parseFloat(characterLength) < 8 || parseFloat(characterLength) > 128) {
    alert("Use a number between 8 and 128");
    var characterLength = prompt(
      "How many Characters would you like to include in your password? \n (Min legenth is 8 and the Max legenth is 128)"
    );
  }

  var lowerCaseCheck = confirm(
    "Would you like to include Lower Case characters?"
  );

  if (lowerCaseCheck) {
    randomArray = randomArray.concat(lowerCase);
  }

  var upperCaseCheck = confirm(
    "Would you like to include Upper Case characters?"
  );

  if (upperCaseCheck) {
    randomArray = randomArray.concat(upperCase);
  }

  var numberCheck = confirm("Would you like to include Numeric characters?");

  if (numberCheck) {
    randomArray = randomArray.concat(numbers);
  }

  var specialCharaterCheck = confirm(
    "Would you like to include Special characters?"
  );

  if (specialCharaterCheck) {
    randomArray = randomArray.concat(specialCharater);
  }

  console.log(randomArray);



















  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var password = generatePassword();
