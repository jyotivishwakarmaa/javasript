document.getElementById("btn1").addEventListener("click", myPassword);

function myPassword(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$*";
    let strlength = str.length;
    let mypass = "";

    for(var i=0; i<=7; i++){
        var strind= Math.floor(Math.random()*strlength);
        mypass+=str.charAt(strind);
    }
    document.getElementById("demo").innerHTML = mypass;
}