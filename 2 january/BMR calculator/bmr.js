document.getElementById("btn").addEventListener("click", bmrcal);

function bmrcal() {
  let name = document.getElementById("nm").ariaValueMax;
  let age = parseInt(document.getElementById("age").value);
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);

  // let BMR = 10 * weight + 6.25 * height - 5 * age + 5;

  // document.getElementById("ans").innerHTML =
  //   "Hello" + name + "<br> Your BMR is : " + BMR;


  let bmr;

  if(bmr=='male'){
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  }
  else{
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
      document.getElementById("ans").innerHTML = "Your BMR : "+bmr;
}
