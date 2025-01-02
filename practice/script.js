document.getElementById("btn").addEventListener("click", myFun);

function myFun(){

    let name = parseInt(document.getElementById("nm").value);
    let age =  parseInt(document.getElementById("ag").value);
    let city = parseInt(document.getElementById("ct").value);
    let phone = parseInt(document.getElementById("ph").value);

    document.getElementById("ans").innerHTML = name+age+city+phone;
}