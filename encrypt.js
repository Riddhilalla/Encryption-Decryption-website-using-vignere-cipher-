function encrypt() {
  const plaintext = document.getElementById("plaintext").value.toUpperCase();
  const keyword = document.getElementById("keyword").value.toUpperCase();

  if (!/^[A-Z]+$/.test(plaintext) || !/^[A-Z]+$/.test(keyword)) {
    alert("Please enter alphabets only for plaintext and keyword.");
    return false;
  }

  let ciphertext = "";
  let keywordIndex = 0;

  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];
    const charCode = char.charCodeAt(0);

    if (char.match(/[A-Z]/)) {
      const keywordChar = keyword[keywordIndex % keyword.length];
      const keywordCharCode = keywordChar.charCodeAt(0);
      const shift = keywordCharCode - 65;

      let encryptedCharCode = charCode + shift;

      if (encryptedCharCode > 90) {
        encryptedCharCode -= 26; 
      }

      const encryptedChar = String.fromCharCode(encryptedCharCode);
      ciphertext += encryptedChar;
      keywordIndex++;
    } else {
      ciphertext += char;
    }
  }

  document.getElementById("ciphertext").value = ciphertext;

  document.getElementById("refreshButton").addEventListener("click", function () {
    location.reload();
  });
}
