
var characters = {
    lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    special: ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", ";"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
};
var confirmLength = "";
var confirmNumbers;
var confirmSpecial;
var confirmUpper;
var confirmLower;

function generatePassword() {
    var confirmLength = (window.prompt("How many characters do you need for your password? Please choose between 8 and 128 characters."));

    while (confirmLength <= 7 || confirmLength >= 129) {
        window.alert("Password length must be between 8 and 128 characters. Please try again.")
        var confirmLength = (window.prompt("How many characters do you need for your password? Please choose between 8 and 128 characters."))
    }
    var confirmLower = window.confirm("Click OK to include lowercase characters.");
    var confirmUpper = window.confirm("Click OK to include uppercase characters.");
    var confirmNumbers = window.confirm("Click OK to include numbers.");
    var confirmSpecial = window.confirm("Click OK to confirm special characters.");

    while (confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSpecial === false) {
        window.alert("You must select at least one parameter");
        var confirmLower = window.confirm("Click OK to include lowercase characters.");
        var confirmUpper = window.confirm("Click OK to include uppercase characters.");
        var confirmNumbers = window.confirm("Click OK to include numbers.");
        var confirmSpecial = window.confirm("Click OK to confirm special characters.");
    }
    var passwordCharacters = []
    if (confirmLower) {
        passwordCharacters = passwordCharacters.concat(characters.lowercase)
    }
    if (confirmUpper) {
        passwordCharacters = passwordCharacters.concat(characters.uppercase)
    }
    if (confirmNumbers) {
        passwordCharacters = passwordCharacters.concat(characters.numbers)
    }
    if (confirmSpecial) {
        passwordCharacters = passwordCharacters.concat(characters.special)
    }

    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        // console.log(randomPassword);
    }
    return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
