function encrypt(message = '', key = '') { //This function will take message and key for encryption
    var x = CryptoJS.AES.encrypt(message, key);
    return x.toString();
}

function decrypt(message = '', key = '') { //This function will take message and key for decryption
    var y = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = y.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
}


function AesEncrypt() { //This function is executed using Encrypt button
    var valid = document.forms["myForm"]["inputText"].value;
    if (valid == null || valid == "") {
        document.getElementById("Derror").innerHTML = '<p style="color:red; font-size:15px; text-align:center;">Please enter a text</p>';
    } else {
        const text = document.getElementById('inputText').value;
        const password = document.getElementById('inputPassword').value;
        var x = encrypt(text, password);
        document.getElementById('demo1').value = x;
    }

}

function AesDecrypt() { //This function is executed using Decrypt button
    var valid = document.forms["myForm"]["inputText"].value;
    if (valid == null || valid == "") {
        document.getElementById("Eerror").innerHTML = '<p style="color:red; font-size:15px; text-align:center;">Paste encrypted text</p>';
    } else {
        const text1 = document.getElementById('inputText').value;
        const password2 = document.getElementById('inputPassword').value;
        var x1 = decrypt(text1, password2);
        document.getElementById("demo2").value = x1;
    }
}

function myCopy1() { //Function to copy text from input field of encrypted text
    /* Get the text field */
    var copyText = document.getElementById("demo1");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
}

function myCopy2() { //Function to copy text from input field of decrypted text
    /* Get the text field */
    var copyText = document.getElementById("demo2");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");


}
