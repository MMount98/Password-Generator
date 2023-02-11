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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  //Where the desired arrays are stored
  var randomArray = [];
  var newPassword = " ";
  //Starting the series of prompt quesitons
  var characterLength = prompt(
    "How many Characters would you like to include in your password? \n (Min legenth is 8 and the Max legenth is 128)"
  );
  //checking to make sure the characterLength was given a valid input
  if (parseFloat(characterLength) < 8 || parseFloat(characterLength) > 128) {
    alert("Use a number between 8 and 128");
    var characterLength = prompt(
      "How many Characters would you like to include in your password? \n (Min legenth is 8 and the Max legenth is 128)"
    );
  }
  // If statements to Build desired characters in Random Array

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

  //Checks to See if Any Properties where selected and if not, to excute the program from the start
  if (
    lowerCaseCheck === false &&
    upperCaseCheck === false &&
    numberCheck === false &&
    specialCharaterCheck === false
  ) {
    alert("No properties where selected, please try again!");
    return writePassword();
  }

  //For loop to output the genorated password
  for (var i = 0; i < parseFloat(characterLength); i++) {
    //Generating a random number based of the index length of random array
    var randomIndex = Math.floor(Math.random() * randomArray.length);
    //Building a string of values from randomArray and storing it in the Varible newPassword
    newPassword += randomArray[randomIndex];
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var password = generatePassword();
