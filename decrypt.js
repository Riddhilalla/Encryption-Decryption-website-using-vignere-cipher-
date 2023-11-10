function decrypt() {
  const ciphertext = document.getElementById("ciphertext").value.toUpperCase();
  const keyword = document.getElementById("keyword").value.toUpperCase();

  if (!/^[A-Z]+$/.test(ciphertext) || !/^[A-Z]+$/.test(keyword)) {
    alert("Please enter alphabets only for plaintext and keyword.");
    return false;
 }

  let plaintext = "";
  let keywordIndex = 0;

  for (let i = 0; i < ciphertext.length; i++) {
    const char = ciphertext[i];
    const keywordChar = keyword[keywordIndex % keyword.length];
    const keywordCharCode = keywordChar.charCodeAt(0) - 65; 

    if (char.match(/[A-Z]/)) {
      const charCode = char.charCodeAt(0) - 65; 
      const decryptedCharCode = (charCode - keywordCharCode + 26) % 26;
      const decryptedChar = String.fromCharCode(decryptedCharCode + 65);
      plaintext += decryptedChar;
      keywordIndex++;
    } else {
      plaintext += char;
    }
  }

  document.getElementById("plaintext").value = plaintext;
  
  document.getElementById("refreshButton").addEventListener("click", function () {
    location.reload();
  });
}


  