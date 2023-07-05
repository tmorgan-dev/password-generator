// Create Arrays to contain the character sets that will be used
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

  function generatePassword() {;

    // password length must be between 8 and 128 char
    var passwordLength = window.prompt("Enter desired password length, between 8 and 128");
    if ((passwordLength < 7) || (passwordLength > 129)){;
      alert("Invalid input; Please try again");
      return;
      };

    // prompt user weather an upper case character is required
    var upperRequired = window.prompt("Is upper case character required? Y/N");
    upperRequired = upperRequired.toUpperCase();
      if (upperRequired !== "Y" && upperRequired !== "N") {;
      alert( "Invalid input; Please try again");
      return;
      };

    // prompt user weather a lower case character is required
    var lowerRequired = window.prompt("Is lower case character required? Y/N");
    lowerRequired = lowerRequired.toUpperCase();
      if (lowerRequired !== "Y" && lowerRequired !== "N"){;
      alert( "Invalid input; Please try again");
      return;
      };

    // prompt user weather a number is required
    var numberRequired = window.prompt("Is number required? Y/N")
    numberRequired = numberRequired.toUpperCase();
    if (numberRequired !== "Y" && numberRequired !== "N"){
      alert( "Invalid input; Please try again");
      return;
    };

    // prompt user weather a special character is required
    var specialRequired = window.prompt("Is a special character required? Y/N")
    specialRequired = specialRequired.toUpperCase();
    if (specialRequired !== "Y" && specialRequired !== "N"){
      alert( "Invalid input; Please try again");
      return;
    };

    if (upperRequired === "N" && lowerRequired === "N" && numberRequired === "N" && specialRequired === "N") {
      alert ("Must select at least one Y")
    }

    var passwordOptions = {
      passwordLength: passwordLength,
      upperRequired: upperRequired,
      lowerRequired: lowerRequired,
      numberRequired: numberRequired,
      specialRequired: specialRequired,
    }
    console.log(passwordOptions)

    var chosenOptions = [
      {
        option: passwordOptions.upperRequired,
        characters: upperCase
      },
      {
        option: passwordOptions.lowerRequired,
        characters: lowerCase
      },
      {
        option: passwordOptions.numberRequired,
        characters: number
      },
      {
        option: passwordOptions.specialRequired,
        characters: special
      },
    ]
    var password = []
    var possiblePassword = []

    chosenOptions.forEach(function (options){
      if (options.option === "Y") {
        possiblePassword = possiblePassword += options.characters
      }
    })

    function getRandomArray(array) {
      var randomIndex = Math.floor(Math.random() * array.length)
      var randomElement = array[randomIndex]
      return randomElement
    }
    for (var i = 0; i < passwordOptions.passwordLength; i++) {
      var newPassword = getRandomArray(possiblePassword)
      password.push(newPassword)
    }
    return password.join("")
  }

function writePassword() {;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;
};

// loop for the number of times defined in passwordLength
for (var i = 0; i < passwordLength.length; i++) {
  // if statements check to see what characters are required
  if (upperRequired === "Y") {
    // use math.random to select characters from the arrays and push them to passwordText
    var push(passwordText) = Math.floor(Math.random() * upperCase.length);
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
