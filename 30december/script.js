
//practice addEventListner



document.getElementById("btn").addEventListener("click", myInfo);

function myInfo(){

    let sub1 = parseInt(document.getElementById("mh").value);
    let sub2 = parseInt(document.getElementById("mh").value);
    let sub3 = parseInt(document.getElementById("mh").value);
    let sub4 = parseInt(document.getElementById("eg").value);

    document.getElementById("ans").innerHTML =
      "Total marks : " +(sub1 + sub2 + sub3 + sub4) +"Percentage :" +(sub1 + sub2 + sub3 + sub4)/4;

    // document.getElementById("ans").innerHTML =`total marks is ${sub1+sub2+sub3+sub4} and percentage is ${(sub1+sub2+sub3+sub4)/4}`

                
}
