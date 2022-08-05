// Assignment Code
var generateBtn = document.querySelector("#generate");


// Gives random integer from character array (explanation found online)  
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var randomNumber = Math.random()
  return Math.floor(min * (1 - randomNumber) + randomNumber * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  //  1. Password prompt with criteria of 8-128 characters
  var userPassInput = window.prompt("How long do you want the password to be? Please enter a number between 8 and 128.")
  //  2. Password length prompt
  var userPassLength = parseInt(userPassInput)
  //    a. Error if letter character
  if (isNaN(userPassLength)) {
    window.alert("Please input a number!")
    return
  }
  //    b. Error if <128, >8
  if (userPassLength < 8 || userPassLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

  // 3. Criteria Prompts 
  var userPassNumbers = window.confirm("Numbers can make your password more secure, would you like to include any?")
  var userPassUppercase = window.confirm("Would you like to sprinkle in some upercase characters?")
  var userPassLowercase = window.confirm("Would you like to sprinkle in some lowercase characters?")
  var userPassSymbols = window.confirm("Symbols can make your password more secure, would you like to include any?")

  //    a. Array with prompt categories
  var passNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var passUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var passLowecase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var passSymbols = ["!", "@", "#", "$", "%", "&", "*", "~", "?"]
  //    b. Prompt options
  var userPrompt = []

  if (userPassNumbers === true) {
    userPrompt.push(passNumbers)
  }
  if (userPassUppercase === true) {
    userPrompt.push(passUppercase)
  }
  if (userPassLowercase === true) {
    userPrompt.push(passLowecase)
  }
  if (userPassSymbols === true) {
    userPrompt.push(passSymbols)
  }
  //    c. this just makes the lowecase characters default
  if (userPrompt.length === 0) {
    userPrompt.push(passLowecase)
  }

  //  4. Gather information and compile character with each iteration of 4 loop
  var generatedPassword = ""
  for (var i = 0; i < userPassLength; i++) {
    var randomList = getRandomItem(userPrompt)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
