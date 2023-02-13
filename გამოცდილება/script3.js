//#region CREATING RELEVANT NUMBER OF FORMS
const numberOfPositions = sessionStorage.getItem("EXP-position");
if (numberOfPositions) {
  const len = numberOfPositions.split(",").length;
  for (i = 1; i < len; i++) {
    moreExperiences();
  }
}
//#endregion
//#region READING INPUT VALUES
let position = document.querySelector("#EXP-position").value;
let employer = document.querySelector("#EXP-employer").value;
let startingDate = document.querySelector("#EXP-startingDate").value;
let endingDate = document.querySelector("#EXP-endingDate").value;
let description = document.querySelector("#EXP-description").value;
//#endregion
//#region READING ERROR / SUCCESS ICONS
const positionPass = document.querySelector("#passPosition");
const positionError = document.querySelector("#errorPosition");
const employerPass = document.querySelector("#passEmployer");
const employerError = document.querySelector("#errorEmployer");

//#endregion
//#region DISPLAYING SESSION VALUES
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

const positionsInSession = sessionStorage.getItem("EXP-position");
if (positionsInSession) {
  const splittedPositionsInSession = positionsInSession.split(",");
  displayPosition(splittedPositionsInSession);
  displayResumePosition(splittedPositionsInSession);
}

const employersInSession = sessionStorage.getItem("EXP-employer");
if (employersInSession) {
  const splittedEmployersInSession = employersInSession.split(",");
  displayEmployer(splittedEmployersInSession);
  displayResumeEmployer(splittedEmployersInSession);
}

const startingDatesInSession = sessionStorage.getItem("EXP-startingDate");
if (startingDatesInSession) {
  const splittedStartingDatesInSession = startingDatesInSession.split(",");
  displayStartingDate(splittedStartingDatesInSession);
  displayResumeStartingDate(splittedStartingDatesInSession);
}

const endingDatesInSession = sessionStorage.getItem("EXP-endingDate");
if (endingDatesInSession) {
  const splittedEndingDatesInSession = endingDatesInSession.split(",");
  displayEndingDate(splittedEndingDatesInSession);
  displayResumeEndingDate(splittedEndingDatesInSession);
}

const experienceInSession = sessionStorage.getItem("EXP-description");
if (experienceInSession) {
  const splittedexperienceInSession = experienceInSession.split(",");
  displayExperience(splittedexperienceInSession);
  displayResumeExperience(splittedexperienceInSession);
}
//#endregion
//#region SYNCING SESSION VALUES
function displayResumeExperience(experiences) {
  const resumeExperiences = document.querySelectorAll(
    'textarea[name="resumeDescription"]'
  );
  experiences.forEach((experience, index) => {
    resumeExperiences[index].innerHTML = experience;
  });
}

function displayExperience(experiences) {
  const inputs = document.querySelectorAll('textarea[name="EXP-description"]');
  experiences.forEach((experience, index) => {
    inputs[index].innerHTML = experience;
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

function displayEndingDate(endingDates) {
  const inputs = document.querySelectorAll('input[name="EXP-endingDate"]');
  endingDates.forEach((endingDate, index) => {
    inputs[index].value = endingDate;
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

function displayStartingDate(startingDates) {
  const inputs = document.querySelectorAll('input[name="EXP-startingDate"]');
  startingDates.forEach((startingDate, index) => {
    inputs[index].value = startingDate;
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

function displayEmployer(employers) {
  const inputs = document.querySelectorAll('input[name="EXP-employer"]');
  employers.forEach((employer, index) => {
    inputs[index].value = employer;
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

function displayPosition(positions) {
  const inputs = document.querySelectorAll('input[name="EXP-position"]');
  positions.forEach((position, index) => {
    inputs[index].value = position;
  });
}
//#endregion
//#region CALL ERROR / SUCCESS FUNCTIONS
errorSuccessHandlingForPosition();
errorSuccessHandlingForEmployer();
errorSuccessHandlingForStartDate();
errorSuccessHandlingForEndDate();
errorSuccessHandlingForDescription();
//#endregion
//#region ONINPUT
function positionOnInput() {
  const positionsInputElements = document.querySelectorAll(
    'input[name="EXP-position"]'
  );
  const positionsArray = Array.from(positionsInputElements).map(
    (inputElement) => inputElement.value
  );
  console.log(positionsArray);
  position = document.querySelector("#EXP-position").value;
  displayPosition(positionsArray);
  displayResumePosition(positionsArray);
  sessionStorage.setItem("EXP-position", positionsArray);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForPosition();
}

function employerOnInput() {
  const employersInputElements = document.querySelectorAll(
    'input[name="EXP-employer"]'
  );
  const employersArray = Array.from(employersInputElements).map(
    (inputElement) => inputElement.value
  );
  employer = document.querySelector("#EXP-employer").value;
  displayEmployer(employersArray);
  displayResumeEmployer(employersArray);
  sessionStorage.setItem("EXP-employer", employersArray);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForEmployer();
}

function startDateOnInput() {
  const startingDatesInputElements = document.querySelectorAll(
    'input[name="EXP-startingDate"]'
  );
  const startingDatesArray = Array.from(startingDatesInputElements).map(
    (inputElement) => inputElement.value
  );
  startingDate = document.querySelector("#EXP-startingDate").value;
  displayStartingDate(startingDatesArray);
  displayResumeStartingDate(startingDatesArray);
  sessionStorage.setItem("EXP-startingDate", startingDatesArray);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForStartDate();
}

function endDateOnInput() {
  const endingDatesInputElements = document.querySelectorAll(
    'input[name="EXP-endingDate"]'
  );
  const endingDatesArray = Array.from(endingDatesInputElements).map(
    (inputElement) => inputElement.value
  );
  endingDate = document.querySelector("#EXP-endingDate").value;
  displayEndingDate(endingDatesArray);
  displayResumeEndingDate(endingDatesArray);
  sessionStorage.setItem("EXP-endingDate", endingDatesArray);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForEndDate();
}

function descriptionOnInput() {
  const descriptionsInputElements = document.querySelectorAll(
    'textarea[name="EXP-description"]'
  );
  const descriptionsArray = Array.from(descriptionsInputElements).map(
    (inputElement) => inputElement.value
  );
  description = document.querySelector("#EXP-description").value;
  displayExperience(descriptionsArray);
  displayResumeExperience(descriptionsArray);
  sessionStorage.setItem("EXP-description", descriptionsArray);
  //ERROR / SUCCESS HANDLING
  errorSuccessHandlingForDescription();
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
//#region MORE EXPERIENCES BUTTON
function moreExperiences() {
  let numberOfForms = document.querySelector("#formParent").children.length;
  let newFormName = "form" + numberOfForms;
  const newForm = document.createElement("form");
  newForm.setAttribute("id", newFormName);
  newForm.innerHTML = `
  <!-- თანამდებობის შესაყვანი ლეიბლი და ინფუთი -->

  <div class="position">
    <label class="redPos" for="EXP-position">თანამდებობა</label>

    <input
      oninput="positionOnInput()"
      type="text"
      class="pos"
      id="EXP-position"
      name="EXP-position"
      placeholder="დეველოპერი, დიზაინერი, ა.შ."
      required
      minlength="2"
    />
    <img
      class="passPosition"
      id="passPosition"
      src="Images/GreenCheckMark.png"
      alt="GreenCheckMark"
    />
    <img
      class="errorPosition"
      id="errorPosition"
      src="Images/ErrorSign.png"
      alt="errorSign"
    />
    <small>მინიმუმ 2 სიმბოლო</small>
  </div>

  <!-- დამსაქმებლის შესაყვანი ლეიბლი და ინფუთი -->
  <div class="employer">
    <label class="redEmployer" for="EXP-employer">დამსაქმებელი</label>
    <input
      type="text"
      oninput="employerOnInput()"
      class="employerInput"
      id="EXP-employer"
      name="EXP-employer"
      placeholder="დამსაქმებელი"
      required
      minlength="2"
    />
    <img
      class="passEmployer"
      src="Images/GreenCheckMark.png"
      alt="GreenCheckMark"
      id="passEmployer"
    />
    <img
      class="errorEmployer"
      src="Images/ErrorSign.png"
      alt="errorSign"
      id="errorEmployer"
    />
    <small>მინიმუმ 2 სიმბოლო</small>
  </div>

  <div class="dates">
    <div class="start">
      <label class="startDateHeader" for="EXP-startingDate"
        >დაწყების რიცხვი</label
      >
      <input
        onchange="startDateOnInput()"
        type="date"
        name="EXP-startingDate"
        class="startDate"
        id="EXP-startingDate"
        required
      />
    </div>

    <div class="end">
      <label class="endDateHeader" for="EXP-endingDate"
        >დამთავრების რიცხვი</label
      >
      <input
        onchange="endDateOnInput()"
        type="date"
        class="endDate"
        name="EXP-endingDate"
        id="EXP-endingDate"
        required
      />
    </div>
  </div>

  <!-- აღწერის ლეიბლი და ინფუთი -->
  <div class="descriptionAll">
    <h2 class="descriptionHeader">აღწერა</h2>
    <textarea
      oninput="descriptionOnInput()"
      name="EXP-description"
      class="description"
      id="EXP-description"
      placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
      required
    ></textarea>
  </div>
    `;

  document.querySelector("#formParent").appendChild(newForm);

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
//#region NEXT BUTTON
function goNext() {
  if (
    positionPass.style.display === "block" &&
    employerPass.style.display === "block" &&
    sessionStorage.getItem("EXP-startingDate") !== "" &&
    sessionStorage.getItem("EXP-endingDate") !== "" &&
    sessionStorage.getItem("EXP-description") !== ""
  ) {
    window.location.href = "../განათლება/index.html";
  } else {
    console.log(positionPass.style.display);
    console.log(employerPass.style.display);
    console.log(startingDate);
    console.log(endingDate);
    console.log(description);
    if (sessionStorage.getItem("EXP-position").length === 0) {
      let positionElement = document.querySelector("#EXP-position");
      positionElement.style.border = "1px solid #EF5050";
      positionPass.style.display = "none";
      positionError.style.display = "block";
      document.querySelector(".redPos").style.color = "#E52F2F";
    } else {
      errorSuccessHandlingForPosition();
    }
    if (sessionStorage.getItem("EXP-employer").length === 0) {
      let employerElement = document.querySelector("#EXP-employer");
      employerElement.style.border = "1px solid #EF5050";
      employerPass.style.display = "none";
      employerError.style.display = "block";
      document.querySelector(".redEmployer").style.color = "#E52F2F";
    } else {
      errorSuccessHandlingForEmployer();
    }
    if (sessionStorage.getItem("EXP-description").length === 0) {
      let descriptionElement = document.querySelector("#EXP-description");
      descriptionElement.style.border = "1px solid #EF5050";
      document.querySelector(".descriptionHeader").style.color = "#E52F2F";
    } else {
      errorSuccessHandlingForDescription();
    }
    if (!sessionStorage.getItem("EXP-startingDate")) {
      let startingDateElement = document.querySelector("#EXP-startingDate");
      startingDateElement.style.border = "1px solid #EF5050";
      document.querySelector(".startDateHeader").style.color = "#E52F2F";
    } else {
      errorSuccessHandlingForStartDate();
    }
    if (!sessionStorage.getItem("EXP-endingDate")) {
      let endingDateElement = document.querySelector("#EXP-endingDate");
      endingDateElement.style.border = "1px solid #EF5050";
      document.querySelector(".endDateHeader").style.color = "#E52F2F";
    } else {
      errorSuccessHandlingForEndDate();
    }
  }
}
//#endregion
//#region GO BACK BUTTON
function goBack() {
  sessionStorage.clear();
  window.location.href = "../Main/index.html";
}
//#endregion
