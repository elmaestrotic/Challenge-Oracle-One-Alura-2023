function encrypt() {
  var inputText = document.getElementById("outputText").value;
  var outputText = document.getElementById("outputText");
  if (inputText !== "") {
    var encryptedText = caesarCipher(inputText, 3); // Encrypt with Caesar cipher (shift of 3)
    outputText.value = encryptedText;
    outputText.style.color = "red";
    txtsalida.textContent=encryptedText;
    titulosalida.textContent= "Mensaje Cifrado"
  } else {
    outputText.value = "Ningún mensaje fue encontrado";
    outputText.style.color = "red";
  }
}

function decrypt() {
  var inputText = document.getElementById("outputText").value;
  var outputText = document.getElementById("outputText");
  var outputText2 =document.getElementById("txtsalida")
  if (inputText !== "") {
    var decryptedText = caesarCipher(inputText, -3); // Decrypt with Caesar cipher (shift of -3)
    outputText.value = decryptedText;
    outputText2.value=decryptedText;
    titulosalida.textContent= "Mensaje Descifrado"
    txtsalida.textContent=decryptedText;
    outputText.style.color = "blue";
  } else {
    outputText.value = "Ningún mensaje fue encontrado";
    outputText.style.color = "red";
  }
}

function caesarCipher(str, shift) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) { // Uppercase letters
      result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
      result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    } else {
      result += str.charAt(i); // Non-alphabetic characters
    }
  }
  return result;
}
