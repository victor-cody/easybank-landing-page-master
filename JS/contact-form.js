(function () {
  //Contact elements
const name = document.getElementById("name"),
      email = document.getElementById("email"),
      message = document.getElementById("message"),
      allInputs = document.querySelectorAll("input,textarea");

  allInputs.forEach((element) => {
    let labelText = element.getAttribute("placeholder");
    element.addEventListener("focus", () => {
      element.value = " ";
      element.previousElementSibling.textContent = labelText;
      element.previousElementSibling.classList.add("view");
      //   console.log("eligible") ? element.value == "" :console.log("not eligible");;
    });
    element.addEventListener("blur", () => {
      element.value = "";
      element.previousElementSibling.textContent = "";
      element.previousElementSibling.classList.remove("view");
    });
  });
})();
