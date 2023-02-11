//#region READING INPUT VALUES
let firstName = document.querySelector("#INF-firstName").value;
let lastName = document.querySelector("#INF-lastName").value;
let aboutMe = document.querySelector("#INF-aboutMe").value;
let email = document.querySelector("#INF-email").value;
let mobileNumber = document.querySelector("#INF-mobileNumber").value;
//#endregion
//#region READING ERROR / SUCCESS ICONS
const firstNamePass = document.querySelector(".passFirstName");
const firstNameError = document.querySelector(".errorFirstName");
const lastNamePass = document.querySelector(".passLastName");
const lastNameError = document.querySelector(".errorLastName");
const emailPass = document.querySelector(".passE-Mail");
const emailError = document.querySelector(".errorE-Mail");
const mobileNumberPass = document.querySelector(".passPhoneNumber");
const mobileNumberError = document.querySelector(".errorPhoneNumber");
//#endregion
//#region DISPLAYING SESSION VALUES
document.querySelector("#resumeFirstName").innerHTML =
  sessionStorage.getItem("INF-firstName");

document.querySelector("#INF-firstName").value =
  sessionStorage.getItem("INF-firstName");

document.querySelector("#resumeLastName").innerHTML =
  sessionStorage.getItem("INF-lastName");

document.querySelector("#INF-lastName").value =
  sessionStorage.getItem("INF-lastName");

document.querySelector("#resumeAboutMe").innerHTML =
  sessionStorage.getItem("INF-aboutMe");

document.querySelector("#INF-aboutMe").value =
  sessionStorage.getItem("INF-aboutMe");
//#endregion
//#region CALL ERROR / SUCCESS FUNCTIONS
errorSuccessHandlingForFirstName();
errorSuccessHandlingForLastName();
errorSuccessHandlingForAboutMe();
//#endregion
//#region DISPLAYING / HIDING ICONS

//#endregion
//#region onInput functions
function firstNameOnInput() {
  //reading the value
  firstName = document.querySelector("#INF-firstName").value;
  //syncing the data with resume divs
  document.querySelector("#resumeFirstName").innerHTML = firstName;
  //storing the values into sessions
  sessionStorage.setItem("INF-firstName", firstName);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForFirstName();
}

function lastNameOnInput() {
  //reading the value
  lastName = document.querySelector("#INF-lastName").value;
  //syncing the data with resume divs
  document.querySelector("#resumeLastName").innerHTML = lastName;
  //storing the values into sessions
  sessionStorage.setItem("INF-lastName", lastName);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForLastName();
}

function aboutMeOnInput() {
  //reading the value
  aboutMe = document.querySelector("#INF-aboutMe").value;
  //syncing the data with resume divs
  document.querySelector("#resumeAboutMe").innerHTML = aboutMe;
  //storing the values into session
  sessionStorage.setItem("INF-aboutMe", aboutMe);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForAboutMe();
}
//#endregion
//#region ERROR / SUCCESS HANDLING
function errorSuccessHandlingForFirstName() {
  //reading the element
  let firstNameElement = document.querySelector("#INF-firstName");
  if (
    firstNameElement.value.length >= 2 &&
    firstNameElement.value.match(/^[ა-ჰ]+$/)
  ) {
    firstNameElement.style.border = "1px solid #98E37E";
    firstNamePass.style.display = "block";
    firstNameError.style.display = "none";
    document.querySelector(".redFName").style.color = "#1A1A1A";
  } else if (firstNameElement.value === "") {
    firstNamePass.style.display = "none";
    firstNameError.style.display = "none";
    firstNameElement.style.border = "1px solid #bcbcbc";
    document.querySelector(".redFName").style.color = "#1A1A1A";
  } else {
    firstNameElement.style.border = "1px solid #EF5050";
    firstNamePass.style.display = "none";
    firstNameError.style.display = "block";
    document.querySelector(".redFName").style.color = "#E52F2F";
  }
}
function errorSuccessHandlingForLastName() {
  //reading the element
  let lastNameElement = document.querySelector("#INF-lastName");
  if (
    lastNameElement.value.length >= 2 &&
    lastNameElement.value.match(/^[ა-ჰ]+$/)
  ) {
    lastNameElement.style.border = "1px solid #98E37E";
    lastNamePass.style.display = "block";
    lastNameError.style.display = "none";
    document.querySelector(".redLName").style.color = "#1A1A1A";
  } else if (lastNameElement.value === "") {
    lastNamePass.style.display = "none";
    lastNameError.style.display = "none";
    lastNameElement.style.border = "1px solid #bcbcbc";
    document.querySelector(".redLName").style.color = "#1A1A1A";
  } else {
    lastNameElement.style.border = "1px solid #EF5050";
    lastNamePass.style.display = "none";
    lastNameError.style.display = "block";
    document.querySelector(".redLName").style.color = "#E52F2F";
  }
}

function errorSuccessHandlingForAboutMe() {
  //reading the element
  let aboutMeElement = document.querySelector("#INF-aboutMe");

  if (aboutMeElement.value !== "") {
    aboutMeElement.style.border = "1px solid #98E37E";
    document.querySelector(".resumeAboutMeHeader").style.display = "inline";
  } else {
    aboutMeElement.style.border = "1px solid #BCBCBC";
    document.querySelector(".resumeAboutMeHeader").style.display = "none";
  }
}
//#endregion
