document.getElementById("btn1").addEventListener("click", dataInsert);

function dataInsert(){
    let rno=document.getElementById("rno").value;
    let nm=document.getElementById("nm").value;
    let city=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;
    let api="http://localhost:3000/student"

    fetch(api, {
        method: 'Post',
        header: {
            'Content-Type': 'application/json' // set content type to json
       },
       body: JSON.stringify({

            "rollno": rno,
            "name": nm,
            "city": ct,
            "fees": fs

       })
    }).then((res)=>{
        alert("data save!");
    })
}