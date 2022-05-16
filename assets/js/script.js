
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// Assignment code here
//Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


//variables for lowercase, uppercase, numeric, and/or special characters
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";


// Add event listener to generate button
generateBtn.addEventListener("click", function writePassword(event) {

  //Prevent sreen refresh on button cick
  event.preventDefault();

  //Clear previous password
  password.value === "";
  var randomString = "";

  //Choose password variables
  var lowercaseLett = confirm("Do you want your password to have lowercase letters?");
  var uppercaseLett = confirm("Do you want your password to have uppercase letters?");
  var num = confirm("Do you want your password to have numbers?");
  var specialCharacters = confirm("Do you want your password to have special characters?");
  var passwordLength = prompt("Choose a password length between 8 and 128 characters.");

  //Check password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please try again, make sure it is a number from 8 to 128.");
    return "";
  } 
  // Ensure at least one criteria is chosen 
  else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
    alert("Please choose at least one password criteria.");
    var lowercaseLett = confirm("Do you want your password to have lowercase letters?");
    var uppercaseLett = confirm("Do you want your password to have uppercase letters?");
    var num = confirm("Do you want your password to have numbers?");
    var specialChar = confirm("Do you want your password to have special characters?");
  }

  //Use selected criteria to generate password
  if (lowercaseLett) {
    optionsVariable += lowercaseAlphabet;
  }
  if (uppercaseLett) {
    optionsVariable += uppercaseAlphabet;
  }
  if (num) {
    optionsVariable += numbers;
  }
  if (specialChar) {
    optionsVariable += specialCharacters;
  }

  //Generate random password based on selected criteria
  for (var i = 0; i < passwordLength; i++) {
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
  }
  password.value = randomString;

}
);

//Call function
 
//writePassword();
