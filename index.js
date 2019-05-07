var dic = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var dic2 = ["+", "@", "#", "$", "%", "^", "&", "*", "0", "|", "~", "/", ";", ":", "}", "{", "[", "]", "!", "5", "8", "7", "9", "2", "(", ")"];

function encrypt() {
    var encrypt2 = "";
    var message = document.getElementById("message").value;
    for (var i = 0; i < message.length; i++) {
        // console.log(message[i])
        var indx = dic.indexOf(message[i]);
        encrypt2 += dic2[indx]
        // console.log(indx);
        if (indx) {
            document.getElementById("encryptText").innerHTML = encrypt2;
        }
        // console.log(dic2[indx])
    }
    // console.log(encrypt2);
    document.getElementById("message").value = "";
    document.getElementById("text").innerHTML += `<span><button onclick="discrypt()" class="btn">discrypt</button></span>`

}



function discrypt() {
    var x = ""
    var descrypt = document.getElementById("encryptText").innerHTML;
    console.log(descrypt)
    for (var i = 0; i < descrypt.length; i++) {
        var indx = dic2.indexOf(descrypt[i]);
        x += dic[indx];
        if (indx) {
            document.getElementById("originalText").innerHTML = x;
        }
    }
}

