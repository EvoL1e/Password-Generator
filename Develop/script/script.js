// Assignment Code
var generateBtn = document.querySelector("#generate");

// An array that holds all the uppercase character's possible for the password
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// An array that holds all the lowercase character's possible for the password
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// An array that holds all the numbers possible for the password
var numericalChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// An array that holds all the special characters possible for the password
var specialChar = ["!", "#", "$", "%", "&", "*", "?", "@"];

//
function getOptions() {
  // Prompts the user to enter the length of the password they want
  var passwordLength = prompt
  (
    "How many characters in your password would you like? It must be an amount in between 8 - 128"
  );
  
  // Makes sure that what was inputted was a number and if not asks the user to input a number again
  if (Number.isNaN(passwordLength)) {
    alert("You did not input a number. Please input a number for the password length");
    return;
  }
  // Makes sure the password is not less than 8 and if it is asks the user to input a larger number
  if (passwordLength < 8) {
    alert("Password length must be a minimum of 8 charachters");
  }
  // Makes sure the password is not greater than 128 and if it is makes the user input a smaller number
  if (passwordLength > 128) {
    alert("Password length must be no greater than 128 characters");
  }
  // Asks the user if they want to have lowercase characters
  var hasLowerCase = confirm(
    "Would you like lowercase characters in your password?"
  );
  // Asks the user if they want uppercase characters
  var hasUpperCase = confirm(
    "Would you like uppercase characters in your password?"
  );
  // Asks the user if they want special characters in their password
  var hasSpecialChar = confirm(
    "Would you like special characters in your password?"
  );
  // Asks the user if they want numbers in their password
  var hasNumbers = confirm(
    "Would you like numbers in your password?"
  );
  // Makes sure that at least one criteria is chosen to start the randomizer
  if(!hasLowerCase && !hasUpperCase && !hasSpecialChar && !hasNumbers) {
    alert("You must select at least one character type");
    return;
  }

  // A variable that holds the chosen criteria and the length of the password
  var options = {
  length: passwordLength,
  hasLowerCase: hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasSpecialChar: hasSpecialChar,
  hasNumbers: hasNumbers,
  };

  // Returns the array with the saved criteria and length of the password
  return options;
}

// Write password to the #password input
function generatePassword()
{
  // guarantee at least one of each character that is selected for the password option
  // You need an array for the final password
  // you need an array for the guarantee characters
  // you need an array for the possible characters
  var options = getOptions();

  //
  var password = [];

  //
  var possibleCharacters = [];

  //
  var guaranteeCharacters = [];

  // For every character type selected, you need to concat the existing character arrays into the possible characters array.
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialcharacters);
    guaranteeCharacters.push(getRandomChar(specialcharacters));
  }

  password.concat(guaranteeCharacters);
  //Array method that will merge all the elements of an array.
  for (var i = 0; i < options.length - guaranteeCharacters.length; i++) {
    var characterResult = getRandomChar(possibleCharacters);
    password.push(characterResult);
  }
}

function writePassword() 
{
  // Saves the password thats genrated to the variable
  var password = generatePassword();

  // Ties the variable to the html's password id to have the password show up there
  var passwordText = document.querySelector("#password");

  // Places the password within the html for the user to see the generated password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
