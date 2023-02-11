"use strict";
//#region READING SESSION VALUES
const firstName = sessionStorage.getItem("firstName");
const lastName = sessionStorage.getItem("lastName");
const email = sessionStorage.getItem("email");
const phoneNumber = sessionStorage.getItem("phoneNumber");
const about = sessionStorage.getItem("about");
const image = sessionStorage.getItem("imageSrc");
const aboutHeader = sessionStorage.getItem("aboutHeader");
//#endregion
//#region DISPLAY VALUES FROM SESSION
document.querySelector(".preview-image").src = image;
document.querySelector(".rightName").textContent = firstName;
document.querySelector(".rightLastName").textContent = lastName;
document.querySelector(".mailP").textContent = email;
document.querySelector(".phoneP").textContent = phoneNumber;
document.querySelector(".aboutMe").textContent = about;
document.querySelector(".aboutHeader").style.display = aboutHeader;

document.querySelector(".posRight");
document.querySelector(".employerRight");
document.querySelector(".startdateRight");
document.querySelector(".endDateRight");
document.querySelector(".expDescription");
document.querySelector(".experienceHeader");
//#endregion
//#region READING INPUT VALUES
const positionInput = document.querySelector(".pos");
const employerInput = document.querySelector(".employerInput");
const startDateInput = document.querySelector(".startDate");
const endDateInput = document.querySelector(".endDate");
const descriptionInput = document.querySelector(".description");
const nextButton = document.querySelector(".next");
//#endregion
//#region READING ERROR HANDERS
const posError = document.querySelector(".errorPos");
const posPass = document.querySelector(".passPos");
const posHeader = document.querySelector(".redPos");
const employerHeader = document.querySelector(".redEmployer");
const startHeader = document.querySelector(".startDateHeader");
const endHeader = document.querySelector(".endDateHeader");
const descriptionHeader = document.querySelector(".descriptionHeader");
const employerError = document.querySelector(".errorEmployer");
const employerPass = document.querySelector(".passEmployer");
//#endregion
//#region ERROR HANDLING
// Position //
positionInput.addEventListener("input", function () {
  if (positionInput.value.length < 2) {
    posError.style.display = "block";
    posPass.style.display = "none";
    positionInput.style.border = "1px solid rgba(239, 80, 80, 1)";
    posHeader.style.color = "#E52F2F";
  }

  if (positionInput.value === "") {
    posError.style.display = "none";
    posPass.style.display = "none";
    positionInput.style.border = "1px solid rgba(188, 188, 188, 1)";
    posHeader.style.color = "";
  }

  if (positionInput.value.length >= 2) {
    posError.style.display = "none";
    posPass.style.display = "block";
    positionInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    posHeader.style.color = "";
  }
});

// Employer//
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

// Start date //
const startDatesInput = document.querySelector(".startDate");

startDatesInput.addEventListener("change", function () {
  if (startDatesInput.value) {
    startDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    startDatesInput.style.border = "";
  }
});

// End date //
const endDatesInput = document.querySelector(".endDate");

endDatesInput.addEventListener("change", function () {
  if (endDatesInput.value) {
    endDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    endDatesInput.style.border = "";
  }
});

// Description //
descriptionInput.addEventListener("input", function () {
  if (descriptionInput.value !== "") {
    descriptionInput.style.border = "1px solid rgba(152, 227, 126, 1)";
    descriptionHeader.style = "";
  }

  if (descriptionInput.value === "") {
    descriptionInput.style.border = "";
  }
});

// Next Button //
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
//#endregion
//#region STORING DATA TO SESSION
const saveUserInput = (id) => {
  const userInput = document.getElementsByClassName(id).value;
  sessionStorage.setItem(id, userInput);
};

const retrieveUserInput = (id) => {
  const savedInput = sessionStorage.getItem(id);
  if (savedInput) {
    document.getElementsByClassName(id).value = savedInput;
  }
};

const inputFields = [
  "pos",
  "employerRight",
  "startDate",
  "endDate",
  "description",
];

inputFields.forEach((id) => {
  retrieveUserInput(id);
  window.addEventListener("beforeunload", () => saveUserInput(id));
});
//#endregion
//#region ERROR HANDLING V2
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
//#endregion
//#region ADD NEW FORM
document
  .querySelector(".moreExperience")
  .addEventListener("click", function () {
    const newForm = document.createElement("form");
    newForm.classList.add("new-form");
    newForm.innerHTML = `<!-- თანამდებობის შესაყვანი ლეიბლი და ინფუთი -->

    <div class="position">
      <label class="redPos" for="pos">თანამდებობა</label>

      <input
        type="text"
        class="pos"
        name="pos"
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
        required
        minlength="2"
      />
      <img
        class="passPos"
        src="Images/GreenCheckMark.png"
        alt="GreenCheckMark"
      />
      <img class="errorPos" src="Images/ErrorSign.png" alt="errorSign" />
      <small>მინიმუმ 2 სიმბოლო</small>
    </div>

    <!-- დამსაქმებლის შესაყვანი ლეიბლი და ინფუთი -->
    <div class="employer">
      <label class="redEmployer" for="employer">დამსაქმებელი</label>
      <input
        type="text"
        class="employer"
        name="employer"
        placeholder="დამსაქმებელი"
        required
        minlength="2"
      />
      <img
        class="passEmployer"
        src="Images/GreenCheckMark.png"
        alt="GreenCheckMark"
      />
      <img
        class="errorEmployer"
        src="Images/ErrorSign.png"
        alt="errorSign"
      />
      <small>მინიმუმ 2 სიმბოლო</small>
    </div>

    <div class="dates">
      <div class="start">
        <label class="startDateHeader" for="startDate"
          >დაწყების რიცხვი</label
        >
        <input type="date" class="startDate" required />
      </div>

      <div class="end">
        <label class="endDateHeader" for="endDate"
          >დამთავრების რიცხვი</label
        >
        <input type="date" class="endDate" required />
      </div>
    </div>

    <!-- აღწერის ლეიბლი და ინფუთი -->
    <div class="descriptionAll">
      <h2 class="descriptionHeader">აღწერა</h2>
      <textarea
        name="description"
        class="description"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        required
      ></textarea>
    </div>`;

    document.querySelector(".forms").appendChild(newForm);
  });
//#endregion
//#region IMAGE UPLOAD HANDLER
// Check if localStorage is supported in the browser
// Get the file input element
const fileInput = document.querySelector("#file-input");

// Listen for changes in the file input element
fileInput.addEventListener("change", function () {
  // Get the first file in the list of selected files
  const file = this.files[0];

  // Create a FileReader object to read the file
  const reader = new FileReader();

  // Listen for the `load` event, which is triggered when the file is finished reading
  reader.addEventListener("load", function () {
    // Get the data URL of the file
    const dataURL = reader.result;
    console.log("hereeeeeeeeeamndsasbkdabdsa");
    console.log(dataURL);

    // Save the data URL to localStorage
    localStorage.setItem("image", dataURL);
  });

  // Start reading the file
  reader.readAsDataURL(file);
});

//#endregion
