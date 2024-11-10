/**
 * querySelector
 * getElementById
 *
 * querySelectorAll
 * getElementsByClassName
 * getElementsTagName
 */

/**
 *  document.createElement('tag name')
 * document.appendChild(element);
 * document.removeChild(element);
 *
 * element.setAttribute(attribute, value);
 * element.innerHtml = new html content
 * element.attribute = new value
 * element.style.property = new style
 * element.style.cssText = ``;
 *
 */

window.onload = function () {
  let result = document.querySelector(".result");
  let lengthOfPassword = document.querySelector("#length");
  let includeNumberCheckBox = document.querySelector("#include-numbers");
  let includeSpecialCharacters = document.querySelector("#include-special");
  let submitButton = document.querySelector("#submit");
  let copyMsg = document.querySelector('#copy-msg');
  let password = "";

  submitButton.addEventListener("click", () => {
    let charactersArray = [
      ..."abcdefghijklmnopqrstuvwxyz".split(""), // Lowercase letters
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), // Uppercase letters
      ..."0123456789".split(""), // Numbers
      ..."!@#$%^&*()_+-=[]{}|;:,.<>?/".split(""), // Special characters
    ];

    // Only include numbers if the checkbox is checked
    if(isNaN(parseInt(lengthOfPassword.value))){
      alert('Specify a length')
    }
    if (!includeNumberCheckBox.checked) {
      charactersArray = charactersArray.filter(
        (char) => !"0123456789".includes(char)
      );
    }

    // Only include special characters if the checkbox is checked
    if (!includeSpecialCharacters.checked) {
      charactersArray = charactersArray.filter(
        (char) => !"!@#$%^&*()_+-=[]{}|;:,.<>?/".includes(char)
      );
    }

    // Convert lengthOfPassword to number inside the event listener
    // let passwordLength = parseInt(lengthOfPassword.value);
    let passwordLength = lengthOfPassword.value;

    // Generate the password
    password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charactersArray.length); // Fix random index generation
      password += charactersArray[randomIndex];
    }

    result.textContent = password;
    console.log(password);
  });



   result.addEventListener("click", () => {
    console.log('success');
    
     navigator.clipboard
       .writeText(result.textContent) // Copies the text content to clipboard
       .then(() => {
        copyMsg.style.display = 'inline-block'
        alert('copied')
         setTimeout(() => {
             copyMsg.style.display = 'none'
         }, 5000);
       })
       .catch((error) => {
         alert("Failed to copy password: " + error);
       });
   });
  
};
