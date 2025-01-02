let back = document.querySelector(".bck");

back.addEventListener("click", (e) => {
  mybox.value = mybox.value.slice(0, -1);
});
