//#region CREATING RELEVANT NUMBER OF FORMS
let selects = document.querySelectorAll('select[name="degree"]');
let options = [];
fetch("https://resume.redberryinternship.ge/api/degrees")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.id;
      option.text = item.title;
      options.push(option);
      syncDegreeValues();
    });
  });

const numberOfEducations = sessionStorage.getItem("EDU-education");
if (numberOfEducations) {
  const len = numberOfEducations.split(",").length;
  for (i = 1; i < len; i++) {
    moreEducations();
  }
}
const positionsInSession = sessionStorage.getItem("EXP-position");
if (positionsInSession) {
  const len = positionsInSession.split(",").length;
  for (i = 1; i < len; i++) {
    newResumeExperienceInstance();
  }
}
//#endregion
//#region API FOR FETCHING THE DEGREES
function syncDegreeValues() {
  selects.forEach((select) => {
    if (select.selectedOptions[1]) {
    } else {
      options.forEach((option) => {
        select.add(option);
      });
    }
  });
}
//#endregion
//#region READING INPUT VALUES
// Education
const educationLabel = document.querySelector(".educationLabel");
const educationInput = document.querySelector(".educationInput");
const passEducation = document.querySelector(".passEducation");
const errorEducation = document.querySelector(".errorEducation");
// Degree
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
//#region DISPLAYING SESSION VALUES
// INF
document.querySelector("#resumeFirstName").innerHTML =
  sessionStorage.getItem("INF-firstName");

document.querySelector("#resumeLastName").innerHTML =
  sessionStorage.getItem("INF-lastName");

document.querySelector("#resumeAboutMe").innerHTML =
  sessionStorage.getItem("INF-aboutMe");

document.querySelector("#resumeMail").innerHTML =
  sessionStorage.getItem("INF-email");

document.querySelector("#resumeNumber").innerHTML =
  sessionStorage.getItem("INF-mobileNumber");
// EXP
if (positionsInSession) {
  const splittedPositionsInSession = positionsInSession.split(",");
  displayResumePosition(splittedPositionsInSession);
}

const employersInSession = sessionStorage.getItem("EXP-employer");
if (employersInSession) {
  const splittedEmployersInSession = employersInSession.split(",");
  displayResumeEmployer(splittedEmployersInSession);
}

const startingDatesInSession = sessionStorage.getItem("EXP-startingDate");
if (startingDatesInSession) {
  const splittedStartingDatesInSession = startingDatesInSession.split(",");
  displayResumeStartingDate(splittedStartingDatesInSession);
}

const endingDatesInSession = sessionStorage.getItem("EXP-endingDate");
if (endingDatesInSession) {
  const splittedEndingDatesInSession = endingDatesInSession.split(",");
  displayResumeEndingDate(splittedEndingDatesInSession);
}

const experienceInSession = sessionStorage.getItem("EXP-description");
if (experienceInSession) {
  const splittedexperienceInSession = experienceInSession.split(",");
  displayResumeExperience(splittedexperienceInSession);
}

// EDU
const educationInSession = sessionStorage.getItem("EDU-education");
if (educationInSession) {
  const splittedEducationInSession = educationInSession.split(",");
  displayEducation(splittedEducationInSession);
  displayResumeEducation(splittedEducationInSession);
}

const degreeInSession = sessionStorage.getItem("EDU-degree");
if (degreeInSession) {
  const splittedDegreeInSession = degreeInSession.split(",");
  displayDegree(splittedDegreeInSession);
  displayResumeDegree(splittedDegreeInSession);
}

const degreeDateInSession = sessionStorage.getItem("EDU-degreeDate");
if (degreeDateInSession) {
  const splittedDegreeDateInSession = degreeDateInSession.split(",");
  displayDegreeDate(splittedDegreeDateInSession);
  displayResumeDegreeDate(splittedDegreeDateInSession);
}

const eduDescriptionInSession = sessionStorage.getItem("EDU-description");
if (eduDescriptionInSession) {
  const splittedEduDescriptionInSession = eduDescriptionInSession.split(",");
  displayEduDescription(splittedEduDescriptionInSession);
  displayResumeEduDescription(splittedEduDescriptionInSession);
}
//#endregion
//#region SYNCING SESSION VALUES
//EDU
function displayResumeDegree(degrees) {
  const educationsData = document.querySelectorAll(
    'h4[class="resumeEducationPlace"]'
  );
  educations.forEach((education, index) => {
    educationsData[index].innerHTML = education;
  });
}

function displayEducation(educations) {
  const inputs = document.querySelectorAll('input[name="education"]');
  educations.forEach((education, index) => {
    inputs[index].value = education;
  });
}

function displayResumeEducation(educations) {
  const educationsData = document.querySelectorAll(
    'h4[class="resumeEducationPlace"]'
  );
  educations.forEach((education, index) => {
    educationsData[index].innerHTML = education;
  });
}

function displayDegree(degrees) {
  const inputs = document.querySelectorAll('select[name="degree"]');
  degrees.forEach((degree, index) => {
    inputs[index].selectedOptions[0].innerHTML = degree;
  });
}

function displayResumeDegree(degrees) {
  const degreesData = document.querySelectorAll(
    'h4[class="resumeEducationDegree"]'
  );
  degrees.forEach((degree, index) => {
    degreesData[index].innerHTML = degree;
  });
}

function displayDegreeDate(degreeDates) {
  const degreeInputElements = document.querySelectorAll(
    'select[name="degree"]'
  );
  degreeDates.forEach((degreeDate, index) => {
    degreeInputElements[index].value = degreeDate;
  });
}

function displayResumeDegreeDate(degreeDates) {
  const resumeDegreeData = document.querySelectorAll(
    'h5[class="resumeEducationEndDate"]'
  );
  degreeDates.forEach((degreeDate, index) => {
    resumeDegreeData[index].innerHTML = degreeDate;
  });
}

function displayEduDescription(eduDescriptions) {
  const inputs = document.querySelectorAll(
    'textarea[class="eduDescriptionTextarea"]'
  );
  eduDescriptions.forEach((eduDescription, index) => {
    inputs[index].value = eduDescription;
  });
}

function displayResumeEduDescription(eduDescriptions) {
  const resumeEduDescription = document.querySelectorAll(
    'textarea[class="resumeEducationDescription"]'
  );
  eduDescriptions.forEach((eduDescription, index) => {
    resumeEduDescription[index].innerHTML = eduDescription;
  });
}
//EXP
function displayResumeExperience(experiences) {
  const resumeExperiences = document.querySelectorAll(
    'textarea[name="resumeDescription"]'
  );
  experiences.forEach((experience, index) => {
    resumeExperiences[index].innerHTML = experience;
  });
}

function displayResumeEndingDate(endingDates) {
  const resumeEndingDates = document.querySelectorAll(
    'h5[class="resumeEndDate"]'
  );
  endingDates.forEach((endingDate, index) => {
    resumeEndingDates[index].innerHTML = endingDate;
  });
}

function displayResumeStartingDate(startingDates) {
  const resumeStartingDates = document.querySelectorAll(
    'h5[class="resumeStartDate"]'
  );
  startingDates.forEach((startingDate, index) => {
    resumeStartingDates[index].innerHTML = startingDate;
  });
}

function displayResumeEmployer(employers) {
  const resumeEmployers = document.querySelectorAll(
    'h4[class="resumeEmployer"]'
  );
  employers.forEach((employer, index) => {
    resumeEmployers[index].innerHTML = employer;
  });
}

function displayResumePosition(positions) {
  const resumePositions = document.querySelectorAll(
    'h4[class="resumePosition"]'
  );
  positions.forEach((position, index) => {
    resumePositions[index].innerHTML = position;
  });
}
//#endregion
//#region CALL ERROR / SUCCESS FUNCTIONS
// errorSuccessHandlingForPosition();
// errorSuccessHandlingForEmployer();
// errorSuccessHandlingForStartDate();
// errorSuccessHandlingForEndDate();
// errorSuccessHandlingForDescription();
//#endregion
//#region ONINPUT
function selectOnChange(element) {
  const degreeInputElements = document.querySelectorAll(
    'select[name="degree"]'
  );
  const degreeArray = Array.from(degreeInputElements).map(
    (inputElement) => inputElement.selectedOptions[0].innerHTML
  );
  sessionStorage.setItem("EDU-degree", degreeArray);
  displayDegree(degreeArray);
  displayResumeDegree(degreeArray);
  //const allChosenDegrees = sessionStorage.getItem("EDU-degree");
  // if (allChosenDegrees) {
  //   const splittedallChosenDegrees = allChosenDegrees.split(",");
  //   //displayDegree(splittedallChosenDegrees);
  //   displayResumeDegree(splittedallChosenDegrees);
  // }
}

function educationOnInput() {
  const educationInputElements = document.querySelectorAll(
    'input[name="education"]'
  );
  const educationArray = Array.from(educationInputElements).map(
    (inputElement) => inputElement.value
  );
  education = document.querySelector("#education").value;
  displayEducation(educationArray);
  displayResumeEducation(educationArray);
  sessionStorage.setItem("EDU-education", educationArray);
  //ERROR / SUCCESS HANDLING
  //errorSuccessHandlingForPosition();
}

function degreeDateOnInput() {
  const degreeDatesInputElements = document.querySelectorAll(
    'input[name="degreeDates"]'
  );
  const degreeDatesArray = Array.from(degreeDatesInputElements).map(
    (inputElement) => inputElement.value
  );
  degreeDate = document.querySelector("#degreeDates").value;
  displayDegreeDate(degreeDatesArray);
  displayResumeDegreeDate(degreeDatesArray);
  sessionStorage.setItem("EDU-degreeDate", degreeDatesArray);
  //ERROR / SUCCESS HANDLING
  //errorSuccessHandlingForStartDate();
}

function eduDescriptionOnInput() {
  const eduDescriptionInputElements = document.querySelectorAll(
    'textarea[name="eduDesctiption"]'
  );
  const eduDescriptionsArray = Array.from(eduDescriptionInputElements).map(
    (inputElement) => inputElement.value
  );
  description = document.querySelector(".eduDescriptionTextarea").value;
  displayEduDescription(eduDescriptionsArray);
  displayResumeEduDescription(eduDescriptionsArray);
  sessionStorage.setItem("EDU-description", eduDescriptionsArray);
  //ERROR / SUCCESS HANDLING
  //errorSuccessHandlingForDescription();
}

//#endregion
//#region ERROR / SUCCESS HANDLING
function errorSuccessHandlingForPosition() {
  //reading the element
  let positionElement = document.querySelector("#EXP-position");
  if (positionElement.value.length < 2) {
    positionError.style.display = "block";
    positionPass.style.display = "none";
    positionElement.style.border = "1px solid rgba(239, 80, 80, 1)";
    document.querySelector(".redPos").style.color = "#E52F2F";
  }

  if (positionElement.value === "") {
    positionError.style.display = "none";
    positionPass.style.display = "none";
    positionElement.style.border = "1px solid rgba(188, 188, 188, 1)";
    document.querySelector(".redPos").style.color = "";
    document.querySelector(".resumeExperienceHeader").style.display = "none";
  }

  if (positionElement.value.length >= 2) {
    positionError.style.display = "none";
    positionPass.style.display = "block";
    positionElement.style.border = "1px solid rgba(152, 227, 126, 1)";
    document.querySelector(".redPos").style.color = "";
  }

  if (positionElement.value.length > 0) {
    document.querySelector(".resumeExperienceHeader").style.display = "block";
  } else {
    document.querySelector(".resumeExperienceHeader").style.display = "none";
  }
}
function errorSuccessHandlingForEmployer() {
  //reading the element
  let employerElement = document.querySelector("#EXP-employer");
  if (employerElement.value.length < 2) {
    employerError.style.display = "block";
    employerPass.style.display = "none";
    employerElement.style.border = "1px solid rgba(239, 80, 80, 1)";
    document.querySelector(".redEmployer").style.color = "#E52F2F";
  }

  if (employerElement.value === "") {
    employerError.style.display = "none";
    employerPass.style.display = "none";
    employerElement.style.border = "1px solid rgba(188, 188, 188, 1)";
    document.querySelector(".redEmployer").style.color = "";
  }

  if (employerElement.value.length >= 2) {
    employerError.style.display = "none";
    employerPass.style.display = "block";
    employerElement.style.border = "1px solid rgba(152, 227, 126, 1)";
    document.querySelector(".redEmployer").style.color = "";
  }
}

function errorSuccessHandlingForStartDate() {
  //reading the element
  let startingDateElement = document.querySelector("#EXP-startingDate");

  if (startingDateElement.value !== "") {
    startingDateElement.style.border = "1px solid #98E37E";
    document.querySelector(".startDateHeader").style.color = "";
  } else {
    startingDateElement.style.border = "1px solid #BCBCBC";
  }
}

function errorSuccessHandlingForEndDate() {
  //reading the element
  let endingDateElement = document.querySelector("#EXP-endingDate");

  if (endingDateElement.value !== "") {
    endingDateElement.style.border = "1px solid #98E37E";
    document.querySelector(".endDateHeader").style.color = "";
  } else {
    endingDateElement.style.border = "1px solid #BCBCBC";
  }
}

function errorSuccessHandlingForDescription() {
  //reading the element
  let descriptionElement = document.querySelector("#EXP-description");
  if (descriptionElement.value !== "") {
    descriptionElement.style.border = "1px solid rgba(152, 227, 126, 1)";
    document.querySelector(".descriptionHeader").style = "";
  }

  if (descriptionElement.value === "") {
    descriptionElement.style.border = "";
  }
}

//#endregion
//#region IMAGE HANDLING
const previewImage = document.querySelector("#previewImage");

window.addEventListener("load", function () {
  if (this.sessionStorage.getItem("INF-image")) {
    previewImage.src = this.sessionStorage.getItem("INF-image");
  }
});
//#endregion
//#region MORE EDUCATIONS BUTTON
function moreEducations() {
  let numberOfForms = document.querySelector(".forms").children.length;
  let newFormName = "form" + numberOfForms;
  const newForm = document.createElement("form");
  newForm.setAttribute("id", newFormName);
  newForm.innerHTML = `
  <div class="education">
  <label class="educationLabel" for="education">სასწავლებელი</label>
  <input
    oninput="educationOnInput()"
    type="text"
    name="education"
    class="educationInput"
    required
    id="education"
    placeholder="სასწავლებელი"
    minlength="2"
  />
  <img
    class="passEducation"
    src="Images/GreenCheckMark.png"
    alt="GreenCheckMark"
  />
  <img
    class="errorEducation"
    src="Images/ErrorSign.png"
    alt="errorSign"
  />
  <small>მინიმუმ 2 სიმბოლო</small>
  </div>

  <div class="degree">
    <div class="degreeInputAndLabel">
      <label class="degreeLabel" for="degree">ხარისხი</label>
      <select id="degree" name="degree" class="degreeInput" onchange="selectOnChange()" required>
        <option value="" disabled selected hidden>
          აირჩიეთ ხარისი
        </option>
      </select>
    </div>
    <div class="degreeDates">
      <label class="degreeDatesLabel" for="degreeDates"
        >დამთავრების რიცხვი</label
      >
      <input
        oninput="degreeDateOnInput()"
        type="date"
        name="degreeDates"
        class="degreeDatesInput"
        id="degreeDates"
        required
      />
    </div>
  </div>

  <div class="educationDescription">
    <h2 class="eduDescription">აღწერა</h2>
    <textarea
      oninput="eduDescriptionOnInput()"
      name="eduDesctiption"
      class="eduDescriptionTextarea"
      placeholder="განათლების აღწერა"
      required
    ></textarea>
  </div>
  `;

  document.querySelector(".forms").appendChild(newForm);

  let newResumeEducationName = "resumeEducation" + numberOfForms;
  const newResumeEducation = document.createElement("div");
  newResumeEducation.setAttribute("id", newResumeEducationName);
  newResumeEducation.innerHTML = `
  <div id="resumeEducation">
    <div class="educationPlaceAndDegree">
      <h4 class="resumeEducationPlace"></h4>
      <h4 class="resumeEducationDegree"></h4>
    </div>
    <h5 class="resumeEducationEndDate"></h5>
    <textarea
      name="resumeEducationDescription"
      class="resumeEducationDescription"
      id="resumeEducationDescription"
      readonly
    ></textarea>
  </div>
  `;

  document.querySelector(".educationResume").appendChild(newResumeEducation);
  selects = document.querySelectorAll('select[name="degree"]');
  syncDegreeValues();
}
//#endregion
//#region CREATE ADDITIONAL RESUME INSTANCES FOR EXPERIENCE
function newResumeExperienceInstance() {
  let numberOfForms = document.querySelector("#resumeExperienceParent").children
    .length;
  let newResumeExperienceName = "resumeExperience" + numberOfForms;
  const newResumeExperience = document.createElement("div");
  newResumeExperience.setAttribute("id", newResumeExperienceName);
  newResumeExperience.innerHTML = `
<div id="resumeExperience">
  <div class="posAndCompany">
    <h4 class="resumePosition"></h4>
    <h4 class="resumeEmployer"></h4>
  </div>
  <div class="resumeDates">
    <h5 class="resumeStartDate"></h5>
    <h5 class="resumeEndDate"></h5>
  </div>
  <textarea
    name="resumeDescription"
    class="resumeDescription"
    readonly
  >
  </textarea>
</div>
  `;

  document
    .querySelector("#resumeExperienceParent")
    .appendChild(newResumeExperience);
}
//#endregion
//#region SEND DATA
function sendData() {
  let data = {
    name: sessionStorage.getItem("INF-firstName"),
    surname: sessionStorage.getItem("INF-lastName"),
    email: sessionStorage.getItem("INF-email"),
    phone_number: sessionStorage.getItem("INF-mobileNumber"),
    experiences: [
      {
        position: sessionStorage.getItem("EXP-position"),
        employer: sessionStorage.getItem("EXP-employer"),
        start_date: sessionStorage.getItem("EXP-startingDate"),
        due_date: sessionStorage.getItem("EXP-endingDate"),
        description: sessionStorage.getItem("EXP-description"),
      },
    ],
    educations: [
      {
        institute: sessionStorage.getItem("EDU-education"),
        degree: sessionStorage.getItem("EDU-degree"),
        due_date: sessionStorage.getItem("EDU-degreeDate"),
        description: sessionStorage.getItem("EDU-description"),
      },
    ],
    image: sessionStorage.getItem("INF-image"),
    about_me: sessionStorage.getItem("INF-aboutMe"),
  };
  console.log(data);
  fetch("https://resume.redberryinternship.ge/api/cvs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Response status:", response.status);
    })
    .catch((error) => {
      console.log("Response error:", error);
    });
}
//#endregion
//#region NEXT BUTTON
function goNext() {
  sendData();
  // if (
  //   positionPass.style.display === "block" &&
  //   employerPass.style.display === "block" &&
  //   sessionStorage.getItem("EXP-startingDate") !== "" &&
  //   sessionStorage.getItem("EXP-endingDate") !== "" &&
  //   sessionStorage.getItem("EXP-description") !== ""
  // ) {
  //   //sendData();
  //   window.location.href = "../განათლება/index.html";
  // } else {
  //   if (sessionStorage.getItem("EXP-position").length === 0) {
  //     let positionElement = document.querySelector("#EXP-position");
  //     positionElement.style.border = "1px solid #EF5050";
  //     positionPass.style.display = "none";
  //     positionError.style.display = "block";
  //     document.querySelector(".redPos").style.color = "#E52F2F";
  //   } else {
  //     errorSuccessHandlingForPosition();
  //   }
  //   if (sessionStorage.getItem("EXP-employer").length === 0) {
  //     let employerElement = document.querySelector("#EXP-employer");
  //     employerElement.style.border = "1px solid #EF5050";
  //     employerPass.style.display = "none";
  //     employerError.style.display = "block";
  //     document.querySelector(".redEmployer").style.color = "#E52F2F";
  //   } else {
  //     errorSuccessHandlingForEmployer();
  //   }
  //   if (sessionStorage.getItem("EXP-description").length === 0) {
  //     let descriptionElement = document.querySelector("#EXP-description");
  //     descriptionElement.style.border = "1px solid #EF5050";
  //     document.querySelector(".descriptionHeader").style.color = "#E52F2F";
  //   } else {
  //     errorSuccessHandlingForDescription();
  //   }
  //   if (!sessionStorage.getItem("EXP-startingDate")) {
  //     let startingDateElement = document.querySelector("#EXP-startingDate");
  //     startingDateElement.style.border = "1px solid #EF5050";
  //     document.querySelector(".startDateHeader").style.color = "#E52F2F";
  //   } else {
  //     errorSuccessHandlingForStartDate();
  //   }
  //   if (!sessionStorage.getItem("EXP-endingDate")) {
  //     let endingDateElement = document.querySelector("#EXP-endingDate");
  //     endingDateElement.style.border = "1px solid #EF5050";
  //     document.querySelector(".endDateHeader").style.color = "#E52F2F";
  //   } else {
  //     errorSuccessHandlingForEndDate();
  //   }
  //  }
}
//#endregion
//#region GO BACK BUTTON
function goBack() {
  sessionStorage.clear();
  window.location.href = "../Main/index.html";
}
//#endregion
