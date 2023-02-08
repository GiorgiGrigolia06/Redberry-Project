"use strict";

// Showing or hiding error/success messages as the user types in the position input //

const posInput = document.getElementById("pos");
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

// End of Showing or hiding error/success messages as the user types in the position input//

// Showing or hiding error/success messages as the user types in the employer input //

const employerInput = document.getElementById("employer");
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

// End of Showing or hiding error/success messages as the user types in the employer input //

// Showing or hiding error/success messages as the user types in the dates input //

// Start date //
const startDatesInput = document.getElementById("startDate");

startDatesInput.addEventListener("change", function () {
  if (startDatesInput.value) {
    startDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    startDatesInput.style.border = "";
  }
});

// End date //
const endDatesInput = document.getElementById("endDate");

endDatesInput.addEventListener("change", function () {
  if (endDatesInput.value) {
    endDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
  } else {
    endDatesInput.style.border = "";
  }
});

// End of Showing or hiding error/success messages as the user types in the dates input //

// Showing or hiding error/success messages as the user types in the description input //

const descriptionInput = document.getElementById("description");

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

const saveUserInput = (id) => {
  const userInput = document.getElementById(id).value;
  sessionStorage.setItem(id, userInput);
};

const retrieveUserInput = (id) => {
  const savedInput = sessionStorage.getItem(id);
  if (savedInput) {
    document.getElementById(id).value = savedInput;
  }
};

const inputFields = ["pos", "employer", "startDate", "endDate", "description"];

inputFields.forEach((id) => {
  retrieveUserInput(id);
  window.addEventListener("beforeunload", () => saveUserInput(id));
});

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
        id="pos"
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
        id="employer"
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
        <input type="date" id="startDate" required />
      </div>

      <div class="end">
        <label class="endDateHeader" for="endDate"
          >დამთავრების რიცხვი</label
        >
        <input type="date" id="endDate" required />
      </div>
    </div>

    <!-- აღწერის ლეიბლი და ინფუთი -->
    <div class="description">
      <h2 class="descriptionHeader">აღწერა</h2>
      <textarea
        name="description"
        id="description"
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        required
      ></textarea>
    </div>`;

    document.querySelector(".forms").appendChild(newForm);

    // Showing or hiding error/success messages as the user types in the position input //

    const posInput = newForm.querySelector("#pos");
    const posError = newForm.querySelector(".errorPos");
    const posPass = newForm.querySelector(".passPos");
    const posHeader = newForm.querySelector(".redPos");
    const employerHeader = newForm.querySelector(".redEmployer");
    const startHeader = newForm.querySelector(".startDateHeader");
    const endHeader = newForm.querySelector(".endDateHeader");
    const descriptionHeader = newForm.querySelector(".descriptionHeader");

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

    // End of Showing or hiding error/success messages as the user types in the position input//

    // Showing or hiding error/success messages as the user types in the employer input //

    const employerInput = newForm.querySelector("#employer");
    const employerError = newForm.querySelector(".errorEmployer");
    const employerPass = newForm.querySelector(".passEmployer");

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

    // End of Showing or hiding error/success messages as the user types in the employer input //

    // Showing or hiding error/success messages as the user types in the dates input //

    // Start date //
    const startDatesInput = newForm.querySelector("#startDate");

    startDatesInput.addEventListener("change", function () {
      if (startDatesInput.value) {
        startDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
      } else {
        startDatesInput.style.border = "";
      }
    });

    // End date //
    const endDatesInput = newForm.querySelector("#endDate");

    endDatesInput.addEventListener("change", function () {
      if (endDatesInput.value) {
        endDatesInput.style.border = "1px solid rgba(152, 227, 126, 1)";
      } else {
        endDatesInput.style.border = "";
      }
    });

    // End of Showing or hiding error/success messages as the user types in the dates input //

    // Showing or hiding error/success messages as the user types in the description input //

    const descriptionInput = newForm.querySelector("#description");

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

    const saveUserInput = (id) => {
      const userInput = newForm.getElementById(id).value;
      sessionStorage.setItem(id, userInput);
    };

    const retrieveUserInput = (id) => {
      const savedInput = sessionStorage.getItem(id);
      if (savedInput) {
        document.getElementById(id).value = savedInput;
      }
    };

    const inputFields = [
      "pos",
      "employer",
      "startDate",
      "endDate",
      "description",
    ];

    inputFields.forEach((id) => {
      retrieveUserInput(id);
      window.addEventListener("beforeunload", () => saveUserInput(id));
    });

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
        newForm.querySelector(".redPos").style.color = "#E52F2F";
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
  });

// End of Adding a new form when pressing a button //
