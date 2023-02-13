"use strict";

// Showing or hiding error/success messages as the user types in the position input //
//#region error handling
const posInput = document.querySelector(".pos");
const posError = document.querySelector(".errorPos");
const posPass = document.querySelector(".passPos");
const posHeader = document.querySelector(".redPos");
const employerHeader = document.querySelector(".redEmployer");
const startHeader = document.querySelector(".startDateHeader");
const endHeader = document.querySelector(".endDateHeader");
const descriptionHeader = document.querySelector(".descriptionHeader");

posInput.addEventListener("input", function () {
  if (posInput.value.length < 2) {
    posError.style.display = "block";
    posPass.style.display = "none";
    posInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    posHeader.style.color = "#E52F2F";
  }

  if (posInput.value === "") {
    posError.style.display = "none";
    posPass.style.display = "none";
    posInput.style.border = "1px solid rgba(188, 188, 188, 1)";
    posHeader.style.color = "";
  }

  if (posInput.value.length >= 2) {
    posError.style.display = "none";
    posPass.style.display = "block";
    posInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    posHeader.style.color = "";
  }
});
//#endregion
// End of Showing or hiding error/success messages as the user types in the position input//

// Showing or hiding error/success messages as the user types in the employer input //
//#region error handling for emploer input
const employerInput = document.querySelector(".employerInput");
const employerError = document.querySelector(".errorEmployer");
const employerPass = document.querySelector(".passEmployer");

employerInput.addEventListener("input", function () {
  if (employerInput.value.length < 2) {
    employerError.style.display = "block";
    employerPass.style.display = "none";
    employerInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    employerHeader.style.color = "#E52F2F";
  }

  if (employerInput.value === "") {
    employerError.style.display = "none";
    employerPass.style.display = "none";
    employerInput.style.border = "1px solid rgba(188, 188, 188, 1)";
    employerHeader.style.color = "";
  }

  if (employerInput.value.length >= 2) {
    employerError.style.display = "none";
    employerPass.style.display = "block";
    employerInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    employerHeader.style.color = "";
  }
});
//#endregion
// End of Showing or hiding error/success messages as the user types in the employer input //
//#region error handling for
// Showing or hiding error/success messages as the user types in the dates input //

// Start date //
const startDatesInput = document.querySelector(".startDate");

startDatesInput.addEventListener("change", function () {
  if (startDatesInput.value) {
    startDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    startHeader.style.color = "rgba(0, 0, 0, 1)";
  } else {
    startDatesInput.style.border = "";
  }
});

// End date //
const endDatesInput = document.querySelector(".endDate");

endDatesInput.addEventListener("change", function () {
  if (endDatesInput.value) {
    endDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    endHeader.style.color = "rgba(0, 0, 0, 1)";
  } else {
    endDatesInput.style.border = "";
  }
});

// End of Showing or hiding error/success messages as the user types in the dates input //

// Showing or hiding error/success messages as the user types in the description input //

const descriptionInput = document.querySelector(".description");

descriptionInput.addEventListener("input", function () {
  if (descriptionInput.value !== "") {
    descriptionInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    descriptionHeader.style = "";
  }

  if (descriptionInput.value === "") {
    descriptionInput.style.border = "";
  }
});

// End of Showing or hiding error/success messages as the user types in the description input //

// Showing error signs if the user presses "შემდეგი" button but the inputs are empty or filled incorrectly //

const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", function () {
  if (posInput.value === "" || posInput.value.length < 2) {
    posError.style.display = "block";
    posPass.style.display = "none";
    posInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    posHeader.style.color = "#E52F2F";
  }
  if (employerInput.value === "" || employerInput.value.length < 2) {
    employerError.style.display = "block";
    employerPass.style.display = "none";
    employerInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    employerHeader.style.color = "#E52F2F";
  }
  if (!startDatesInput.value) {
    startDatesInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    startHeader.style.color = "#E52F2F";
  }
  if (!endDatesInput.value) {
    endDatesInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    endHeader.style.color = "#E52F2F";
  }
  if (descriptionInput.value === "") {
    descriptionInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    descriptionHeader.style.color = "#E52F2F";
  }
});

// End of Showing error signs if the user presses "შემდეგი" button but the inputs are empty or filled incorrectly //

// Saving user input if the page refreshes //

// const saveUserInput = (id) => {
//   const userInput = document.getElementsByClassName(id).value;
//   sessionStorage.setItem(id, userInput);
// };

// const retrieveUserInput = (id) => {
//   const savedInput = sessionStorage.getItem(id);
//   if (savedInput) {
//     document.getElementsByClassName(id).value = savedInput;
//   }
// };

// const inputFields = [
//   "pos",
//   "employerRight",
//   "startDate",
//   "endDate",
//   "description",
// ];

// inputFields.forEach((id) => {
//   retrieveUserInput(id);
//   window.addEventListener("beforeunload", () => saveUserInput(id));
// });

// End of Saving user input if the page refreshes //

// Saving error/success signs and showing them after the page is refreshed //

// For position //
window.addEventListener("load", function () {
  if (posInput.value.length >= 2) {
    posPass.style.display = "block";
    posInput.style.border = "1px solid #98E37E";
  } else if (posInput.value === "") {
    posError.style.display = "none";
    posPass.style.display = "none";
    posInput.style.border = "1px solid rgba(188, 188, 188, 1)";
  } else {
    posError.style.display = "block";
    sessionStorage.setItem("posErrorDisplay", "block");
    posInput.style.border = "1px solid #EF5050";
    document.querySelector(".redPos").style.color = "#E52F2F";
  }
});

// For employer //
window.addEventListener("load", function () {
  if (employerInput.value.length >= 2) {
    employerPass.style.display = "block";
    employerInput.style.border = "1px solid #98E37E";
  } else if (employerInput.value === "") {
    employerError.style.display = "none";
    employerPass.style.display = "none";
    employerInput.style.border = "1px solid rgba(188, 188, 188, 1)";
  } else {
    employerError.style.display = "block";
    sessionStorage.setItem("employerErrorDisplay", "block");
    employerInput.style.border = "1px solid #EF5050";
    document.querySelector(".redEmployer").style.color = "#E52F2F";
  }
});

// For dates //
window.addEventListener("load", function () {
  if (startDatesInput.value) {
    startDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    startDatesInput.style.border = "";
  }

  if (endDatesInput.value) {
    endDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    endDatesInput.style.border = "";
  }
});

window.addEventListener("load", function () {
  if (descriptionInput.value !== "") {
    descriptionInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    descriptionHeader.style = "";
  }

  if (descriptionInput.value === "") {
    descriptionInput.style.border = "";
  }
});

// End of Saving error/success signs and showing them after the page is refreshed //

// Adding a new form when pressing a button //

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
        oninput="positionOnInput0()"
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
        name="EXP-description"
        class="description"
        id="EXP-description"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        required
      ></textarea>
    </div>
    `;

  document.querySelector("#formParent").appendChild(newForm);
}
// End of Adding a new form when pressing a button //

// Showing saved data from previous page //

window.addEventListener("load", function () {
  const firstName = sessionStorage.getItem("INF-firstName");
  const lastName = sessionStorage.getItem("INF-lastName");
  const email = sessionStorage.getItem("INF-email");
  const phoneNumber = sessionStorage.getItem("INF-mobileNumber");
  const about = sessionStorage.getItem("INF-aboutMe");
  const image = sessionStorage.getItem("INF-imageSrc");
  const aboutHeader = sessionStorage.getItem("INF-aboutHeader");

  document.querySelector(".preview-image").src = image;
  document.querySelector(".rightName").textContent = firstName;
  document.querySelector(".rightLastName").textContent = lastName;
  document.querySelector(".mailP").textContent = email;
  document.querySelector(".phoneP").textContent = phoneNumber;
  document.querySelector(".aboutMe").textContent = about;
  document.querySelector(".aboutHeader").style.display = aboutHeader;
});

// End of Showing saved data from previous page //

// From left to right //

const posInputLeft = document.querySelector(".pos");
const employerInputLeft = document.querySelector(".employerInput");
const startDateInputLeft = document.querySelector(".startDate");
const endDateInputLeft = document.querySelector(".endDate");
const descriptionInpuLeft = document.querySelector(".description");

const posInputRight = document.querySelector(".posRight");
const employerInputRight = document.querySelector(".employerRight");
const startDateInputRight = document.querySelector(".startdateRight");
const endDateInputRight = document.querySelector(".endDateRight");
const descriptionInputRight = document.querySelector(".expDescription");
const experienceHeaderRight = document.querySelector(".experienceHeader");

const elements = [
  posInputLeft,
  employerInputLeft,
  startDateInputLeft,
  endDateInputLeft,
  descriptionInpuLeft,
];

const keys = [
  "EXP-position",
  "EXP-employer",
  "EXP-startingDate",
  "EXP-endingDate",
  "EXP-description",
];

const displayElements = [
  posInputRight,
  employerInputRight,
  startDateInputRight,
  endDateInputRight,
  descriptionInputRight,
];

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("input", function () {
    displayElements[i].innerHTML = elements[i].value;
    sessionStorage.setItem(keys[i], elements[i].value);
  });

  elements[i].value = sessionStorage.getItem(keys[i]) || "";
  displayElements[i].innerHTML = elements[i].value;
}

document.addEventListener("DOMContentLoaded", function () {
  experienceHeaderRight.style.display =
    posInputLeft.value !== "" ? "block" : "none";
});

// End of From left to right //

// Adding Comma next to the posInputLeft field if it's not an empty string //
posInputLeft.addEventListener("input", function () {
  posInputRight.textContent = posInputLeft.value;
  if (posInputLeft.value !== "") {
    posInputRight.textContent = `${posInputRight.textContent},`;
  }
});
