"use strict";

//#region STORING ELEMENTS IN VARIABLES

// Education
const educationLabel = document.querySelector(".educationLabel");
const educationInput = document.querySelector(".educationInput");
const passEducation = document.querySelector(".passEducation");
const errorEducation = document.querySelector(".errorEducation");

// Degree
const degreeLabel = document.querySelector(".degreeLabel");
const degreeInput = document.querySelector(".degreeInput");
const degreeDatesLabel = document.querySelector(".degreeDatesLabel");
const degreeDatesInput = document.querySelector(".degreeDatesInput");

// Description
const eduDescriptionH2 = document.querySelector(".eduDescription");
const eduDescriptionTextarea = document.querySelector(
  ".eduDescriptionTextarea"
);

// Finish
const finishButton = document.querySelector(".finish");

//#endregion

//#region SHOWING SUCCESS/ERROR MESSAGES WHEN USER TYPES IN DATA

// Education - showing success/error messages when user types in data //
educationInput.addEventListener("input", function () {
  if (educationInput.value.length < 2) {
    passEducation.style.display = "none";
    errorEducation.style.display = "block";
    educationLabel.style.color = "rgba(229, 47, 47, 1)";
    educationInput.style.border = "1px solid rgba(239, 80, 80, 1)";
  }

  if (educationInput.value.length >= 2) {
    passEducation.style.display = "block";
    errorEducation.style.display = "none";
    educationLabel.style.color = "";
    educationInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  }

  if (educationInput.value === "") {
    passEducation.style.display = "none";
    errorEducation.style.display = "none";
    educationLabel.style.color = "";
    educationInput.style.border = "";
  }
});

// Degree - showing success/error messages when user types in data //
degreeDatesInput.addEventListener("change", function () {
  if (degreeDatesInput.value) {
    degreeDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    degreeDatesLabel.style.color = "";
  } else {
    degreeDatesInput.style.border = "";
  }
});

// Description - showing success/error messages when user types in data //
eduDescriptionTextarea.addEventListener("input", function () {
  if (eduDescriptionTextarea.value === "") {
    eduDescriptionTextarea.style.border = "";
  }

  if (eduDescriptionTextarea.value !== "") {
    eduDescriptionTextarea.style.border = "1px solid rgba(152, 227, 126, 1)";
    eduDescriptionH2.style.color = "";
  }
});

//#endregion

//#region SAVING INPUT DATA WHEN USER REFRESHES THE PAGE

// Saving input when user refreshes the page //

const saveUserInput = (id) => {
  const userInput = document.querySelector(id).value;
  sessionStorage.setItem(id, userInput);
};

const retrieveUserInput = (id) => {
  const savedInput = sessionStorage.getItem(id);
  if (savedInput) {
    document.querySelector(id).value = savedInput;
  }
};

const inputFields = [
  ".educationInput",
  ".degreeDatesInput",
  ".eduDescriptionTextarea",
];

inputFields.forEach((id) => {
  retrieveUserInput(id);
  window.addEventListener("beforeunload", () => saveUserInput(id));
});

//#endregion

//#region SAVING ERROR/SUCCESS MESSAGES WHEN USER REFRESHES THE PAGE

// Saving error/success messages when user refreshes the page //

// .educationInput
window.addEventListener("load", function () {
  if (educationInput.value.length >= 2) {
    passEducation.style.display = "block";
    educationInput.style.border = "1px solid #98E37E";
  } else if (educationInput.value === "") {
    errorEducation.style.display = "none";
    passEducation.style.display = "none";
  } else {
    errorEducation.style.display = "block";
    educationInput.style.border = "1px solid #EF5050";
    educationLabel.style.color = "#E52F2F";
  }
});

// .degreeDatesInput
window.addEventListener("load", function () {
  if (degreeDatesInput.value) {
    degreeDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    degreeDatesInput.style.border = "";
  }
});

// .eduDescriptionTextarea
window.addEventListener("load", function () {
  if (eduDescriptionTextarea.value) {
    eduDescriptionTextarea.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    eduDescriptionTextarea.style.border = "";
  }
});

//#endregion

//#region CHECKING IF ALL THE INPUTS ARE CORRECTLY WRITTEN WHEN PRESSING THE "დასრულება" BUTTON

// Pressing "დასრულება" button without having all inputs filled correctly.
finishButton.addEventListener("click", function () {
  if (educationInput.value.length < 2) {
    passEducation.style.display = "none";
    errorEducation.style.display = "block";
    educationLabel.style.color = "rgba(229, 47, 47, 1)";
    educationInput.style.border = "1px solid rgba(239, 80, 80, 1)";
  }

  if (!degreeDatesInput.value) {
    degreeDatesInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    degreeDatesLabel.style.color = "rgba(239, 80, 80, 1)";
  }

  if (eduDescriptionTextarea.value === "") {
    eduDescriptionTextarea.style.border = "1px solid rgba(239, 80, 80, 1)";
    eduDescriptionH2.style.color = "rgba(239, 80, 80, 1)";
  }
});

//#endregion
