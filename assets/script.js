// Create Arrays to contain the character sets that will be used
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  ;
  // password length must be between 8 and 128 char
  var passwordLength = window.prompt("Enter desired password length, between 8 and 128");
  if ((passwordLength < 7) || (passwordLength > 129)) {
    ;
    alert("Invalid input; Please try again");
    return;
  };

  // prompt user weather an upper case character is required
  var upperRequired = window.confirm("If upper case character is required, click OK. If not click Cancel.");

  // prompt user weather a lower case character is required
  var lowerRequired = window.confirm("If lower case character is required, click OK. If not click Cancel.");

  // prompt user weather a number is required
  var numberRequired = window.confirm("If number is required, click OK. If not click Cancel.")

  // prompt user weather a special character is required
  var specialRequired = window.confirm("If special character is required, click OK. If not click Cancel.")

  if (!upperRequired && !lowerRequired && !numberRequired && !specialRequired) {
    alert("Must select at least one option")
  }

  //loads the gathered options into an object to reference in the next object
  var passwordOptions = {
    passwordLength: passwordLength,
    upperRequired: upperRequired,
    lowerRequired: lowerRequired,
    numberRequired: numberRequired,
    specialRequired: specialRequired,
  }

  //creates an object to grab the character sets if they are required
  var chosenOptions = [
    {
      required: passwordOptions.upperRequired,
      characters: upperCase
    },
    {
      required: passwordOptions.lowerRequired,
      characters: lowerCase
    },
    {
      required: passwordOptions.numberRequired,
      characters: number
    },
    {
      required: passwordOptions.specialRequired,
      characters: special
    },
  ]

  //create undefined variables to house the password and possible password
  var password = []
  var passwordCharacters = []

  //loads all of the required characters into the possible password
  chosenOptions.forEach(function (options) {
    if (options.required) {
      passwordCharacters.push(options.characters)
    }
  }
  )

  //takes all of the characters in possible password and combines them into 
  var possiblePassword = passwordCharacters.flat()

  //function to grab a random element from an array
  function getRandomArray(array) {
    var randomIndex = Math.floor(Math.random() * array.length)
    var randomElement = array[randomIndex]
    return randomElement
  }
  //gets items from the possible password list for the desired password length
  for (var i = 0; i < passwordOptions.passwordLength; i++) {
    var randomPassword = getRandomArray(possiblePassword)
    password.push(randomPassword)
  }

  console.log(possiblePassword)

  if (randomPassword !== includes(passwordCharacters)) {
    getRandomArray()
  }
  else {
    return password.join("")
  }

  // return password.join("")
}

function writePassword() {
  ;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
