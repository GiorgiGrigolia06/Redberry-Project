"use strict";

//#region REMOVING POPUP

const popUp = document.querySelector(".popUp");
const closePopUp = document.querySelector(".closePopUp");

closePopUp.addEventListener("click", function () {
  popUp.style.display = "none";
});

//#endregion
//#region INSERTING THE DATA FROM SESSION STORAGE
// INF-firstName
document.querySelector(".firstName").innerHTML =
  sessionStorage.getItem("INF-firstName");
// INF-lastName
document.querySelector(".lastName").innerHTML =
  sessionStorage.getItem("INF-lastName");
// INF-aboutMe
document.querySelector(".aboutP").innerHTML =
  sessionStorage.getItem("INF-aboutMe");
// INF-email
document.querySelector(".mailInput").innerHTML =
  sessionStorage.getItem("INF-email");
// INF-mobileNumber
document.querySelector(".phoneInput").innerHTML =
  sessionStorage.getItem("INF-mobileNumber");
//COUNT EXPERIENCES
const numberOfExperiences = sessionStorage
  .getItem("EXP-position")
  .split(",").length;
console.log("numberOfExperiences");
console.log(numberOfExperiences);
console.log("numberOfExperiences");
// EXP-position
const positions = sessionStorage.getItem("EXP-position").split(",");
const resumePositions = document.querySelectorAll('h3[class="position"]');
positions.forEach((position, index) => {
  resumePositions[index].innerHTML = position;
});
// EXP-employer
const employers = sessionStorage.getItem("EXP-employer").split(",");
const resumeEmployers = document.querySelectorAll('h3[class="employer"]');
employers.forEach((employer, index) => {
  resumeEmployers[index].innerHTML = employer;
});
// EXP-startingDate
const startingDates = sessionStorage.getItem("EXP-startingDate").split(",");
const resumeStartingDates = document.querySelectorAll('h3[class="startDate"]');
startingDates.forEach((startingDate, index) => {
  resumeStartingDates[index].innerHTML = startingDate;
});
// EXP-endingDate
const endingDates = sessionStorage.getItem("EXP-endingDate").split(",");
const resumeEndingDates = document.querySelectorAll('h3[class="endDate"]');
endingDates.forEach((endingDate, index) => {
  resumeEndingDates[index].innerHTML = endingDate;
});
//EXP-description
const descriptions = sessionStorage.getItem("EXP-description").split(",");
const resumeDescriptions = document.querySelectorAll(
  'p[class="positionDescription"]'
);
descriptions.forEach((description, index) => {
  resumeDescriptions[index].innerHTML = description;
});
//COUNT EXPERIENCES
const numberOfEducations = sessionStorage
  .getItem("EDU-education")
  .split(",").length;
console.log("numberOfEducations");
console.log(numberOfEducations);
console.log("numberOfEducations");
//EDU-education
const educations = sessionStorage.getItem("EDU-education").split(",");
const resumeEducations = document.querySelectorAll(
  'h3[class="educationPlace"]'
);
educations.forEach((education, index) => {
  resumeEducations[index].innerHTML = education;
});
//EDU-degree
const degrees = sessionStorage.getItem("EDU-degree").split(",");
const resumeDegrees = document.querySelectorAll('h3[class="educationType"]');
degrees.forEach((degree, index) => {
  resumeDegrees[index].innerHTML = degree;
});
//EDU-degreeDate
const degreeDates = sessionStorage.getItem("EDU-degreeDate").split(",");
const resumeDegreeDates = document.querySelectorAll(
  'h3[class="educationEndDate"]'
);
degreeDates.forEach((degreeDate, index) => {
  resumeDegreeDates[index].innerHTML = degreeDate;
});
//EDU-description
const descriptions2 = sessionStorage.getItem("EDU-description").split(",");
const resumeDescriptions2 = document.querySelectorAll(
  'p[class="educationDescription"]'
);
descriptions2.forEach((description2, index) => {
  resumeDescriptions2[index].innerHTML = description2;
});
//#endregion
//#region IMAGE HANDLING
const previewImage = document.querySelector("#previewImage");

window.addEventListener("load", function () {
  if (this.sessionStorage.getItem("INF-image")) {
    previewImage.src = this.sessionStorage.getItem("INF-image");
  }
});
//#endregion
//#region GOING BACK TO THE FIRST PAGE

function goBack() {
  sessionStorage.clear();
  window.location.href = "../Main/index.html";
}

//#endregion
