"use strict";

// Checking user's input under the "სახელი" label //

const firstNameInput = document.getElementById("first-name");
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
  } else if (firstNameInput.value === "") {
    passName.style.display = "none";
    errorName.style.display = "none";
    firstNameInput.style.border = "1px solid #bcbcbc";
  } else {
    firstNameInput.style.border = "1px solid #EF5050";
    passName.style.display = "none";
    errorName.style.display = "block";
  }
});

// End of Checking user's input under the "სახელი" label //

// Checking user's input under the "გვარი" label //

const lastNameInput = document.getElementById("last-name");
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
  } else if (lastNameInput.value === "") {
    passLastName.style.display = "none";
    errorLastName.style.display = "none";
    lastNameInput.style.border = "1px solid #bcbcbc";
  } else {
    lastNameInput.style.border = "1px solid #EF5050";
    passLastName.style.display = "none";
    errorLastName.style.display = "block";
  }
});

// End of Checking user's input under the "გვარი" label //

// Changing the border color of the textarea when user types something in it //

const aboutYouInput = document.getElementById("aboutYou");

aboutYouInput.addEventListener("input", () => {
  if (aboutYouInput.value !== "") {
    aboutYouInput.style.border = "1px solid #98E37E";
  } else {
    aboutYouInput.style.border = "1px solid #BCBCBC";
  }
});

// End of Changing the border color of the textarea when user types something in it //

// Checking user's input under the "ელ.ფოსტა" label //

const emailInput = document.getElementById("email");
const passEMail = document.querySelector(".passE-Mail");
const errorEMail = document.querySelector(".errorE-Mail");

emailInput.addEventListener("input", () => {
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
  }
});

// End of Checking user's input under the "ელ.ფოსტა" label //

// Checking user's input under the "მობილურის ნომერი" label //

const inputPhoneNumber = document.querySelector("#phone-number");
const passPhoneNumber = document.querySelector(".passPhoneNumber");
const errorPhoneNumber = document.querySelector(".errorPhoneNumber");

inputPhoneNumber.addEventListener("input", function () {
  if (inputPhoneNumber.value === "") {
    passPhoneNumber.style.display = "none";
    errorPhoneNumber.style.display = "none";
    inputPhoneNumber.style.border = "1px solid #bcbcbc";
  } else if (
    inputPhoneNumber.value.match(
      /\+995\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}/
    ) &&
    inputPhoneNumber.value.length === 17
  ) {
    passPhoneNumber.style.display = "block";
    errorPhoneNumber.style.display = "none";
    inputPhoneNumber.style.border = "1px solid #98E37E";
  } else {
    passPhoneNumber.style.display = "none";
    errorPhoneNumber.style.display = "block";
    inputPhoneNumber.style.border = "1px solid #EF5050";
  }
});

// End of Checking user's input under the "მობილურის ნომერი" label //

// Saving user input when page is refreshed //

const saveUserInput = (id) => {
  const userInput = document.getElementById(id).value;
  localStorage.setItem(id, userInput);
};

const retrieveUserInput = (id) => {
  const savedInput = localStorage.getItem(id);
  if (savedInput) {
    document.getElementById(id).value = savedInput;
  }
};

const inputFields = [
  "first-name",
  "last-name",
  "aboutYou",
  "email",
  "phone-number",
];

inputFields.forEach((id) => {
  retrieveUserInput(id);
  window.addEventListener("beforeunload", () => saveUserInput(id));
});

// End of Saving user input when page is refreshed //

// Deleting user input when going back to main page //

document.querySelector(".goBackArrow").addEventListener("click", function () {
  const inputFields = [
    "first-name",
    "last-name",
    "aboutYou",
    "email",
    "phone-number",
  ];

  const removeUserInput = function (fieldId) {
    localStorage.removeItem(fieldId);
  };

  window.addEventListener("beforeunload", function () {
    inputFields.forEach((field) => removeUserInput(field));
  });
});

// End of Deleting user input when going back to main page //
