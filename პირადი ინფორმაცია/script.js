"use strict";

//#region SHOWING SUCCESS/ERROR MESSAGES AS THE USER TYPES IN DATA

// Checking user's input under the "სახელი" label //

const firstNameInput = document.getElementById("INF-firstName");
const passName = document.querySelector(".passName");
const errorName = document.querySelector(".errorName");

firstNameInput.addEventListener("input", () => {
  if (
    firstNameInput.value.length >= 2 &&
    firstNameInput.value.match(/^[ა-ჰ]+$/)
  ) {
    firstNameInput.style.border = "1px solid #98E37E";
    passName.style.display = "block";
    errorName.style.display = "none";
    document.querySelector(".redFName").style.color = "#1A1A1A";
  } else if (firstNameInput.value === "") {
    passName.style.display = "none";
    errorName.style.display = "none";
    firstNameInput.style.border = "1px solid #bcbcbc";
    document.querySelector(".redFName").style.color = "#1A1A1A";
  } else {
    firstNameInput.style.border = "1px solid #EF5050";
    passName.style.display = "none";
    errorName.style.display = "block";
    document.querySelector(".redFName").style.color = "#E52F2F";
  }
});

// End of Checking user's input under the "სახელი" label //

// Checking user's input under the "გვარი" label //

const lastNameInput = document.getElementById("INF-lastName");
const passLastName = document.querySelector(".passLastName");
const errorLastName = document.querySelector(".errorLastName");

lastNameInput.addEventListener("input", () => {
  if (
    lastNameInput.value.length >= 2 &&
    lastNameInput.value.match(/^[ა-ჰ]+$/)
  ) {
    lastNameInput.style.border = "1px solid #98E37E";
    passLastName.style.display = "block";
    errorLastName.style.display = "none";
    document.querySelector(".redLName").style.color = "#1A1A1A";
  } else if (lastNameInput.value === "") {
    passLastName.style.display = "none";
    errorLastName.style.display = "none";
    lastNameInput.style.border = "1px solid #bcbcbc";
    document.querySelector(".redLName").style.color = "#1A1A1A";
  } else {
    lastNameInput.style.border = "1px solid #EF5050";
    passLastName.style.display = "none";
    errorLastName.style.display = "block";
    document.querySelector(".redLName").style.color = "#E52F2F";
  }
});

// End of Checking user's input under the "გვარი" label //

// Changing the border color of the textarea when user types something in it //

const aboutYouInput = document.getElementById("INF-aboutMe");

aboutYouInput.addEventListener("input", () => {
  if (aboutYouInput.value !== "") {
    aboutYouInput.style.border = "1px solid #98E37E";
  } else {
    aboutYouInput.style.border = "1px solid #BCBCBC";
  }
});

// End of Changing the border color of the textarea when user types something in it //

// Checking user's input under the "ელ.ფოსტა" label //

const emailInput = document.getElementById("INF-email");
const passEMail = document.querySelector(".passE-Mail");
const errorEMail = document.querySelector(".errorE-Mail");

emailInput.addEventListener("input", () => {
  if (emailInput.value.match(/[a-zA-Z0-9._%+-]+@redberry\.ge$/)) {
    passEMail.style.display = "block";
    errorEMail.style.display = "none";
    emailInput.style.border = "1px solid #98E37E";
    document.querySelector(".redEmail").style.color = "#1A1A1A";
  } else if (emailInput.value === "") {
    passEMail.style.display = "none";
    errorEMail.style.display = "none";
    emailInput.style.border = "1px solid #bcbcbc";
    document.querySelector(".redEmail").style.color = "#1A1A1A";
  } else {
    passEMail.style.display = "none";
    errorEMail.style.display = "block";
    emailInput.style.border = "1px solid #EF5050";
    document.querySelector(".redEmail").style.color = "#E52F2F";
  }
});

// End of Checking user's input under the "ელ.ფოსტა" label //

// Checking user's input under the "მობილურის ნომერი" label //

const inputPhoneNumber = document.querySelector("#INF-mobileNumber");
const passPhoneNumber = document.querySelector(".passPhoneNumber");
const errorPhoneNumber = document.querySelector(".errorPhoneNumber");

inputPhoneNumber.addEventListener("input", function () {
  if (inputPhoneNumber.value === "") {
    passPhoneNumber.style.display = "none";
    errorPhoneNumber.style.display = "none";
    inputPhoneNumber.style.border = "1px solid #bcbcbc";
    document.querySelector(".redPhoneNumber").style.color = "#1A1A1A";
  } else if (
    inputPhoneNumber.value.match(
      /\+995\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}/
    ) &&
    inputPhoneNumber.value.length === 17
  ) {
    passPhoneNumber.style.display = "block";
    errorPhoneNumber.style.display = "none";
    inputPhoneNumber.style.border = "1px solid #98E37E";
    document.querySelector(".redPhoneNumber").style.color = "#1A1A1A";
  } else {
    passPhoneNumber.style.display = "none";
    errorPhoneNumber.style.display = "block";
    inputPhoneNumber.style.border = "1px solid #EF5050";
    document.querySelector(".redPhoneNumber").style.color = "#E52F2F";
  }
});

// End of Checking user's input under the "მობილურის ნომერი" label //

//#endregion

//#region SAVING USER INPUT WHEN PAGE REFRESHES

// Saving user input when page is refreshed //

// const saveUserInput = (id) => {
//   const userInput = document.getElementById(id).value;
//   sessionStorage.setItem(id, userInput);
// };

const retrieveUserInput = (id) => {
  const savedInput = sessionStorage.getItem(id);
  if (savedInput) {
    document.getElementById(id).value = savedInput;
  }
};

const inputFields = [
  "INF-firstName",
  "INF-lastName",
  "INF-aboutMe",
  "INF-email",
  "INF-mobileNumber",
];

inputFields.forEach((id) => {
  retrieveUserInput(id);
  //window.addEventListener("beforeunload", () => saveUserInput(id));
});
window.addEventListener("beforeunload", function () {
  inputFields.forEach((item) => {
    sessionStorage.setItem(item, document.getElementById(item).value);
  });
});

//#endregion

//#region SAVING ERROR/SUCCESS SIGNS AND SHOWING THEM AFTER THE PAGE IS REFRESHED

// Saving error/success signs and showing them after the page is refreshed.

// For phone number //
window.addEventListener("load", function () {
  if (
    inputPhoneNumber.value.match(
      /\+995\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}/
    ) &&
    inputPhoneNumber.value.length === 17
  ) {
    document.querySelector(".passPhoneNumber").style.display = "block";
    inputPhoneNumber.style.border = "1px solid #98E37E";
  } else if (inputPhoneNumber.value === "") {
    document.querySelector(".errorPhoneNumber").style.display = "none";
    document.querySelector(".passPhoneNumber").style.display = "none";
  } else {
    document.querySelector(".errorPhoneNumber").style.display = "block";
    sessionStorage.setItem("errorPhoneNumberDisplay", "block");
    inputPhoneNumber.style.border = "1px solid #EF5050";
    document.querySelector(".redPhoneNumber").style.color = "#E52F2F";
  }
});

// For E-mail //
window.addEventListener("load", function () {
  if (emailInput.value.match(/[a-zA-Z0-9._%+-]+@redberry\.ge$/)) {
    passEMail.style.display = "block";
    errorEMail.style.display = "none";
    emailInput.style.border = "1px solid #98E37E";
  } else if (emailInput.value === "") {
    passEMail.style.display = "none";
    errorEMail.style.display = "none";
    emailInput.style.border = "1px solid #bcbcbc";
  } else {
    passEMail.style.display = "none";
    errorEMail.style.display = "block";
    emailInput.style.border = "1px solid #EF5050";
    document.querySelector(".redEmail").style.color = "#E52F2F";
  }
});

// For first name //
window.addEventListener("load", function () {
  if (
    firstNameInput.value.length >= 2 &&
    firstNameInput.value.match(/^[ა-ჰ]+$/)
  ) {
    firstNameInput.style.border = "1px solid #98E37E";
    passName.style.display = "block";
    errorName.style.display = "none";
  } else if (firstNameInput.value === "") {
    passName.style.display = "none";
    errorName.style.display = "none";
    firstNameInput.style.border = "1px solid #bcbcbc";
  } else {
    firstNameInput.style.border = "1px solid #EF5050";
    passName.style.display = "none";
    errorName.style.display = "block";
    document.querySelector(".redFName").style.color = "#E52F2F";
    document.querySelector(".redFName").style.color = "#E52F2F";
  }
});

// For last name //
window.addEventListener("load", function () {
  if (
    lastNameInput.value.length >= 2 &&
    lastNameInput.value.match(/^[ა-ჰ]+$/)
  ) {
    lastNameInput.style.border = "1px solid #98E37E";
    passLastName.style.display = "block";
    errorLastName.style.display = "none";
  } else if (lastNameInput.value === "") {
    passLastName.style.display = "none";
    errorLastName.style.display = "none";
    lastNameInput.style.border = "1px solid #bcbcbc";
  } else {
    lastNameInput.style.border = "1px solid #EF5050";
    passLastName.style.display = "none";
    errorLastName.style.display = "block";
    document.querySelector(".redLName").style.color = "#E52F2F";
  }
});

// For aboutMe textarea //
window.addEventListener("load", function () {
  if (aboutYouInput.value !== "") {
    aboutYouInput.style.border = "1px solid #98E37E";
  } else {
    aboutYouInput.style.border = "1px solid #BCBCBC";
  }
});

// End of Saving user input when page is refreshed //

//#endregion

//#region DELETING USER INPUT WHEN GOING BACK TO THE MAIN PAGE

// Deleting user input when going back to main page //

document.querySelector(".goBackArrow").addEventListener("click", function () {
  const inputFields = [
    "INF-firstName",
    "INF-lastName",
    "INF-aboutMe",
    "INF-email",
    "INF-mobileNumber",
    "rightName",
    "rightLastName",
    "mailP",
    "phoneP",
    "aboutMe",
  ];

  const elementsToHide = {
    "#aboutHeader": "none",
    "#phoneLogo": "none",
    "#mailLogo": "none",
  };

  const removeUserInput = function (fieldId) {
    sessionStorage.removeItem(fieldId);
  };

  window.addEventListener("beforeunload", function () {
    inputFields.forEach((field) => removeUserInput(field));
  });

  for (const [element, displayStyle] of Object.entries(elementsToHide)) {
    document.querySelector(element).style.display = displayStyle;
    sessionStorage.setItem(`${element.slice(1)}Display`, displayStyle);
  }

  previewImage.src = "";
  previewImage.style.display = "none";
  sessionStorage.removeItem("INF-imageSrc");
});

// End of Deleting user input when going back to main page //

//#endregion

//#region DISPLAYING AND SAVING DATA ON THE RIGHT SIDE OF THE PAGE

// Displaying and saving data on the right side of the page //

function syncInputWithDisplay(inputElement, displayElement, imageId) {
  inputElement.addEventListener("input", function () {
    displayElement.textContent = inputElement.value;
    sessionStorage.setItem(displayElement.id, inputElement.value);

    // handle display of aboutHeader and aboutMe
    const aboutHeader = document.querySelector("#aboutHeader");
    const aboutMe = document.querySelector("#aboutMe");
    if (inputAbout.value !== "") {
      if (aboutHeader) {
        aboutHeader.style.display = "block";
        sessionStorage.setItem("aboutHeaderDisplay", "block");
      }
      if (aboutMe) {
        aboutMe.style.display = "block";
        sessionStorage.setItem("aboutMeDisplay", "block");
      }
    } else {
      if (aboutHeader) {
        aboutHeader.style.display = "none";
        sessionStorage.setItem("aboutHeaderDisplay", "none");
      }
      if (aboutMe) {
        aboutMe.style.display = "none";
        sessionStorage.setItem("aboutMeDisplay", "none");
      }
    }

    // handle display of image
    if (inputElement.value !== "") {
      if (imageId) {
        const image = document.querySelector(`#${imageId}`);
        if (image) {
          image.style.display = "inline";
          sessionStorage.setItem(`${imageId}Display`, "inline");
        }
      }
    } else {
      if (imageId) {
        const image = document.querySelector(`#${imageId}`);
        if (image) {
          image.style.display = "none";
          sessionStorage.setItem(`${imageId}Display`, "none");
        }
      }
    }
  });

  window.addEventListener("load", function () {
    if (sessionStorage.getItem(displayElement.id)) {
      displayElement.textContent = sessionStorage.getItem(displayElement.id);
    }
    const aboutHeader = document.querySelector("#aboutHeader");
    if (aboutHeader && sessionStorage.getItem("aboutHeaderDisplay")) {
      aboutHeader.style.display = sessionStorage.getItem("aboutHeaderDisplay");
    }
    const aboutMe = document.querySelector("#aboutMe");
    if (aboutMe && sessionStorage.getItem("aboutMeDisplay")) {
      aboutMe.style.display = sessionStorage.getItem("aboutMeDisplay");
    }
    if (imageId && sessionStorage.getItem(`${imageId}Display`)) {
      const image = document.querySelector(`#${imageId}`);
      if (image) {
        image.style.display = sessionStorage.getItem(`${imageId}Display`);
      }
    }
  });
}

const inputFirstName = document.querySelector("#INF-firstName");
const displayRightName = document.querySelector("#rightName");

const inputLastName = document.querySelector("#INF-lastName");
const displayRightLastName = document.querySelector("#rightLastName");

const inputMail = document.querySelector("#INF-email");
const displayRightEmail = document.querySelector("#rightMail p");

const displayRightNumber = document.querySelector("#rightNumber p");

const inputAbout = document.querySelector("#INF-aboutMe");
const displayRightAbout = document.querySelector("#aboutMe");

syncInputWithDisplay(inputFirstName, displayRightName);
syncInputWithDisplay(inputLastName, displayRightLastName);

syncInputWithDisplay(inputMail, displayRightEmail, "mailLogo");
syncInputWithDisplay(inputPhoneNumber, displayRightNumber, "phoneLogo");

syncInputWithDisplay(inputAbout, displayRightAbout);

// End of Creating the right side of the page //

//#endregion

//#region SHOWING UPLOADED IMAGE ON THE RIGHT SIDE OF THE PAGE
// Showing uploaded image on the right side of the page //

const uploadedImage = document.querySelector("#file-input");
const previewImage = document.querySelector("#preview-image");
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
  const objectURL = URL.createObjectURL(file);
  previewImage.src = objectURL;
});

window.addEventListener("load", function () {
  if (this.sessionStorage.getItem("INF-imageSrc")) {
    previewImage.src = this.sessionStorage.getItem("INF-imageSrc");
    previewImage.style.display = "block";
  }

  this.document
    .querySelector("#file-input")
    .addEventListener("change", function () {
      const file = this.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        previewImage.src = reader.result;
        previewImage.style.display = "block";
        sessionStorage.setItem("INF-imageSrc", reader.result);
      });

      reader.readAsDataURL(file);
    });
});

// End of Showing uploaded image on the right side of the page //

//#endregion

//#region SHOWING ERROR SIGNS IF THE "შემდეგი" BUTTON IS PRESSED BUT THE INPUTS ARE INVALIND

// Showing error signs if the "შემდეგი" button is pressed but input fields are empty or not valid //
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", function () {
  if (firstNameInput.value === "") {
    passName.style.display = "none";
    errorName.style.display = "block";
    firstNameInput.style.border = "1px solid #EF5050";
  }
  if (lastNameInput.value === "") {
    passLastName.style.display = "none";
    errorLastName.style.display = "block";
    lastNameInput.style.border = "1px solid #EF5050";
  }
  if (emailInput.value === "") {
    passEMail.style.display = "none";
    errorEMail.style.display = "block";
    emailInput.style.border = "1px solid #EF5050";
  }
  if (inputPhoneNumber.value === "") {
    passPhoneNumber.style.display = "none";
    errorPhoneNumber.style.display = "block";
    inputPhoneNumber.style.border = "1px solid #EF5050";
  }

  if (!uploadedImage.value) {
    imageError.style.display = "block";
    imagePass.style.display = "none";
  }

  if (
    firstNameInput.value.length >= 2 &&
    firstNameInput.value.match(/^[ა-ჰ]+$/) &&
    lastNameInput.value.length >= 2 &&
    lastNameInput.value.match(/^[ა-ჰ]+$/) &&
    emailInput.value.match(/[a-zA-Z0-9._%+-]+@redberry\.ge$/) &&
    inputPhoneNumber.value.match(
      /\+995\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}/
    ) &&
    inputPhoneNumber.value.length === 17 &&
    uploadedImage.value
  ) {
    ///////////////////////////////////////////////////////////////
    // const firstName = document.querySelector("#first-name").value;
    // const lastName = document.querySelector("#last-name").value;
    // const email = document.querySelector("#email").value;
    // const phoneNumber = document.querySelector("#phone-number").value;
    // const about = aboutYouInput.value;
    const aboutH3 = document.querySelector(".aboutHeader");

    // sessionStorage.setItem("INF-firstName", firstName);
    // sessionStorage.setItem("INF-lastName", lastName);
    // sessionStorage.setItem("INF-email", email);
    // sessionStorage.setItem("INF-mobileNumber", phoneNumber);
    // sessionStorage.setItem("INF-aboutMe", about);
    sessionStorage.setItem("INF-aboutHeader", aboutH3.style.display);

    ////////////////////////////////////////////////////////
    window.location.href = "../გამოცდილება/index.html";
    ///////////////////////////////////////////////////////////////////////////////////
  }
});

// End of Showing error signs if the "შემდეგი" button is pressed but input fields are empty or not valid //

//#endregion
