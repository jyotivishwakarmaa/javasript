document.getElementById("btn").addEventListener("click", bmical);

function bmical() {
  let name = document.getElementById("nm").value;
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);

  let BMI = weight / (height * height/10000);
  document.getElementById("ans").innerHTML = "Your bmi is : " + BMI;
}
