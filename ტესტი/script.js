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

document.querySelector("#resumeMail").innerHTML =
  sessionStorage.getItem("INF-email");

document.querySelector("#INF-email").value =
  sessionStorage.getItem("INF-email");

document.querySelector("#resumeNumber").innerHTML =
  sessionStorage.getItem("INF-mobileNumber");

document.querySelector("#INF-mobileNumber").value =
  sessionStorage.getItem("INF-mobileNumber");
//#endregion
//#region CALL ERROR / SUCCESS FUNCTIONS
errorSuccessHandlingForFirstName();
errorSuccessHandlingForLastName();
errorSuccessHandlingForAboutMe();
errorSuccessHandlingForEmail();
errorSuccessHandlingForNumber();
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

function emailOnInput() {
  //reading the value
  email = document.querySelector("#INF-email").value;
  //syncing the data with resume divs
  document.querySelector("#resumeMail").innerHTML = email;
  //storing the values into session
  sessionStorage.setItem("INF-email", email);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForEmail();
}

function numberOnInput() {
  //reading the value
  mobileNumber = document.querySelector("#INF-mobileNumber").value;
  //syncing the data with resume divs
  document.querySelector("#resumeNumber").innerHTML = mobileNumber;
  //storing the values into session
  sessionStorage.setItem("INF-mobileNumber", mobileNumber);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForNumber();
}
//#endregion
//#region image handling
const uploadedImage = document.querySelector("#INF-image");
const previewImage = document.querySelector("#previewImage");
const imagePass = document.querySelector(".passImage");
const imageError = document.querySelector(".errorImage");

uploadedImage.addEventListener("change", function () {
  if (uploadedImage.value) {
    imagePass.style.display = "block";
    imageError.style.display = "none";
  }
});

uploadedImage.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const objectURL = URL.createObjectURL(file);
    previewImage.src = objectURL;
  }
});

window.addEventListener("load", function () {
  if (this.sessionStorage.getItem("INF-image")) {
    previewImage.src = this.sessionStorage.getItem("INF-image");
    imagePass.style.display = "block";
    imageError.style.display = "none";
    previewImage.style.display = "block";
  }

  this.document
    .querySelector("#INF-image")
    .addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
          previewImage.src = reader.result;
          previewImage.style.display = "block";
          sessionStorage.setItem("INF-image", reader.result);
        });

        reader.readAsDataURL(file);
      }
    });
});
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
    firstNameValidated = true;
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
    lastNameValidated = true;
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
    document.querySelector(".resumeAboutMeHeader").style.display = "block";
  } else {
    aboutMeElement.style.border = "1px solid #BCBCBC";
    document.querySelector(".resumeAboutMeHeader").style.display = "none";
  }
}

function errorSuccessHandlingForEmail() {
  //reading the element
  let emailElement = document.querySelector("#INF-email");
  if (emailElement.value !== "") {
    document.querySelector("#resumeEmailLogo").style.display = "block";
  } else {
    document.querySelector("#resumeEmailLogo").style.display = "none";
  }

  if (emailElement.value.match(/[a-zA-Z0-9._%+-]+@redberry\.ge$/)) {
    emailPass.style.display = "block";
    emailError.style.display = "none";
    emailElement.style.border = "1px solid #98E37E";
    document.querySelector(".redEmail").style.color = "#1A1A1A";
    emailValidated = true;
  } else if (emailElement.value === "") {
    emailPass.style.display = "none";
    emailError.style.display = "none";
    emailElement.style.border = "1px solid #bcbcbc";
    document.querySelector(".redEmail").style.color = "#1A1A1A";
  } else {
    emailPass.style.display = "none";
    emailError.style.display = "block";
    emailElement.style.border = "1px solid #EF5050";
    document.querySelector(".redEmail").style.color = "#E52F2F";
  }
}

function errorSuccessHandlingForNumber() {
  //reading the element
  let numberElement = document.querySelector("#INF-mobileNumber");
  if (numberElement.value !== "") {
    document.querySelector("#resumePhoneLogo").style.display = "block";
  } else {
    document.querySelector("#resumePhoneLogo").style.display = "none";
  }

  if (numberElement.value === "") {
    mobileNumberPass.style.display = "none";
    mobileNumberError.style.display = "none";
    numberElement.style.border = "1px solid #bcbcbc";
    document.querySelector(".redPhoneNumber").style.color = "#1A1A1A";
  } else if (
    numberElement.value.match(
      /\+995\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}/
    ) &&
    numberElement.value.length === 17
  ) {
    mobileNumberPass.style.display = "block";
    mobileNumberError.style.display = "none";
    numberElement.style.border = "1px solid #98E37E";
    document.querySelector(".redPhoneNumber").style.color = "#1A1A1A";
  } else {
    mobileNumberPass.style.display = "none";
    mobileNumberError.style.display = "block";
    numberElement.style.border = "1px solid #EF5050";
    document.querySelector(".redPhoneNumber").style.color = "#E52F2F";
  }
}
//#endregion
//#region NEXT BUTTON
function goNext() {
  if (
    firstNamePass.style.display === "block" &&
    lastNamePass.style.display === "block" &&
    emailPass.style.display === "block" &&
    mobileNumberPass.style.display === "block" &&
    imagePass.style.display === "block"
  ) {
    window.location.href = "../გამოცდილება/index.html";
  }
}
//#endregion
