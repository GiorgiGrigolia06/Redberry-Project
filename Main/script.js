"use strict";
const button = document.querySelector(".addResume");

button.addEventListener("click", function () {
  sessionStorage.setItem("buttonClicked", true);
  window.location.href = "../პირადი ინფორმაცია/index.html";
});

if (sessionStorage.getItem("buttonClicked")) {
  button.style.cursor = "pointer";
}
