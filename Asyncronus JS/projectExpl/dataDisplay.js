async function dataShow() {
  let api = "http://localhost:3000/student";
  let Table =
    "<table border='1' bgcolor= 'pink'><tr><th>Rollno</th><th>Name</th><th>City</th><th>Fees</th></tr>";

  const myobj = await fetch(api);
  //   console.log(myobj);
  const data = await myobj.json();
  console.log(data);

  data.map((item) => {
    Table += `<tr>
                <td> ${item.rollno}</td>
                <td> ${item.name}</td>
                <td> ${item.city}</td>
                <td> ${item.fees}</td>
             </tr>`;
  });

  Table += "</table>  <br><br>  <h2>Display data using fetch method</h2>";
  document.getElementById("demo").innerHTML = Table;

  let Table1 =
    "<table border='1' bgcolor='pink'><tr><th>Rollno</th><th>Name</th><th>City</th><th>Fees</th></tr>";

  fetch(api)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      data.map((item) => {
        Table1 += `<tr>
                  <td> ${item.rollno}</td>
                  <td> ${item.name}</td>
                  <td> ${item.city}</td>
                  <td> ${item.fees}</td>
                   </tr>`;
      });
      document.getElementById("demo1").innerHTML = Table1;
    });
}
dataShow();
