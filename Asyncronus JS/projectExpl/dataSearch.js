document.getElementById("btn1").addEventListener("click", mySearch);

async function mySearch() {
  let rollno = document.getElementById("rno").value;
  let api = `http://localhost:3000/student?rollno=${rollno}`;

  const myobj = await fetch(api);
  const data = await myobj.json();

  let TAB = `<table border = "1" bgcolor = "pink" width = "400px">
    
            <tr>
                <th> Roll no </th>
                <th> Name </th>
                <th> City </th>
                <th> Fees </th>
              </tr>`;

  data.map((key) => {
    TAB += `
                  <tr>
                        <td>${key.rollno}</td>
                        <td>${key.name}</td>
                        <td>${key.city}</td>
                        <td>${key.fees}</td>
                  </tr>`;
  });
  TAB += "</table>";
  document.getElementById("show").innerHTML = TAB;
}
