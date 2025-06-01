# Day 18 - 40 Days of JavaScript - DOM Manipulations

## **🎯 Goal of This Lesson**

- ✅ Module 3 & DOM
- ✅ Intro to DOM Manipulation
- ✅ What Will We Learn?
- ✅ Create Elements
- ✅ Inserting Elements - Before
- ✅ Inserting Elements - After
- ✅ Modify Content - innerHTML
- ✅ Security Risk of innerHTML
- ✅ Modify Content - textContent
- ✅ Removing Elements
- ✅ Travarsing DOM
- ✅ Manipulating Styles
- ✅ Manipulating Classes
- ✅ Working with classLIst
- ✅ Controlling Visibility
- ✅ Project 1 - Toggle Me
- ✅ Project 2 - Task Manager
- ✅ Tasks and Wrapping Up


## **👩‍💻 🧑‍💻 Assignment Tasks**

### ✅ 1. Create a form dynamically using JavaScript and manipulate its behavior

- Add input fields dynamically based on user selection e.g., text, email, number
- Add a submit button that logs all the input values as an object.
- Add a reset button that clears the form.
- Use createElement, appendChild, setAttribute, and addEventListener.

```js
  function createFormDynamically() {
    const userChoiceBtn = document.createElement("button");
    userChoiceBtn.innerText = "Choice input field";
    userChoiceBtn.style.marginBottom = "40px";
    document.querySelector("body").appendChild(userChoiceBtn);

    //create form element
    const formElem = document.createElement("form");

    userChoiceBtn.addEventListener("click", e => {
      //take choice of input type from user 
      let userChoice = prompt("Select a filed type. text, email or number");

      //if desired value provided then program will go ahead
      if(
        userChoice && userChoice.toLowerCase() === "text" ||
        userChoice && userChoice.toLowerCase() === "email" ||
        userChoice && userChoice.toLowerCase() === "number"
      ) {

        //create a warper for inputs
        const inputWarper = document.createElement("div");
        inputWarper.style.margin = "10px 0";

        //create label
        const label = document.createElement("label");
        const labelText = userChoice.split("");
        const firstLetter = labelText.shift();
        label.innerText = firstLetter.toUpperCase() + labelText.join("");
        label.style.marginRight = "10px";
        inputWarper.appendChild(label);

        //create form field by user's choice and add it to dom
        const inputField = document.createElement("input");

        inputField.setAttribute("type", userChoice);
        inputField.setAttribute("placeholder",  userChoice === "text" ? "Enter a text" : userChoice === "email" ? "Enter an email" : userChoice === "number" ? "Enter a number" :  (userChoice = prompt("Select a filed type. text, email or number")) );

        inputField.style.margin = "10px 0";

        inputWarper.appendChild(inputField)
        formElem.appendChild(inputWarper);

        //form added to the DOM
        document.querySelector("body").appendChild(formElem);

      } else {
        alert("Try again and enter a valid choice");
      }
    });

    //add a submit button that logs all the input values as an object.
    const submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.type = "submit";
    submitBtn.style.margin = "20px 5px";
    formElem.appendChild(submitBtn);

    //add a reset button
    const resetBtn = document.createElement("button");
    resetBtn.type = "reset";
    resetBtn.innerText = "Reset"
    resetBtn.style.margin = "20px 5px"
    formElem.appendChild(resetBtn);

    //submit form and console.log inputs as an object  
    formElem.onsubmit = e => {
      e.preventDefault();

      const inputs = e.target.childNodes;

      let inputObj = {};
      for (let index = 0; index < inputs.length; index++) {
        const element = inputs[index];
        
        if(element.type === "submit" || element.type === "reset") {
          continue;
        }
        inputObj[element.lastElementChild.type] = element.lastElementChild.value;
      }
      console.log(inputObj);
    }
  }
  createFormDynamically();
```
![Rendered Image 1](./images/Day-18-Task-1-A.jpg)
![Rendered Image 2](./images/Day-18-Task-1-B.jpg)
![Rendered Image 3](./images/Day-18-Task-1-C.jpg)



### ✅ 2. 2. Add, delete, and search rows in a dynamic table

- A form to add rows (Name, Age, Role).
- Each row should have a “Delete” button to remove it.
- Add a search input that filters the rows by name.
- Use insertRow, deleteRow, and textContent/innerText.

```js
  const table = document.getElementById("dynamic-table");
  function tableTh() {
    const thArr = ["Name", "Age", "Role", "Action"];

    const tr = table.insertRow(0);

    thArr.forEach((item, index) => {
      const td = tr.insertCell(index);
      td.innerText = item;
      td.style.fontWeight = "bold";
    });
  }
  tableTh();

  const addTableDataForm = document.querySelector("#add-table-data");
  addTableDataForm.addEventListener("submit", e => {
    e.preventDefault();

    const fieldArr = [e.target.name, e.target.age, e.target.role];
    const isValid = formValidation(fieldArr);
    
    if(isValid) {
      const trReference = table.firstChild.childNodes
      const tr = table.insertRow(trReference.length);

      //adding an empty array item to delete button
      fieldArr.push("");
      
      fieldArr.forEach((item, index) => {
        const td = tr.insertCell(index);
        td.innerText = item.value;
        if(index === fieldArr.length - 1 ) {
          td.innerHTML = `<button onclick="deleteTr(this)">❌</button>`;
        }
      });
      e.target.reset();
    }
  });

  function deleteTr(button) {
    const rowIndex = button.parentNode.parentNode.rowIndex;
    document.querySelector("table#dynamic-table").deleteRow(rowIndex);
  }

  function searchTr(input) {
    const searchTerm = input.value.trim();
    const trArr = Array.from(document.querySelectorAll("#dynamic-table tr"));
    trArr.shift(); // remove the first tr which is the table head
    
    trArr.forEach(tr => {
      const name = tr.firstElementChild.innerText;
      tr.style.display = name.toLowerCase().includes(searchTerm.toLowerCase()) ? "table-row" : "none";
    })
    
  }

  function formValidation(fields) {
    let isValid = true;
    for (let index = 0; index < fields.length; index++) {
      const element = fields[index];
      
      if(element.value.trim() === "" || !element.value) {
        alert(`${element.name.toUpperCase()} field can not be empty!`)
        isValid = false;
        break;
      }
    }
    return isValid;
  }
```

![Rendered Image 1](./images/Day-18-Task-2-A.jpg)


### 3. Theme Switcher with Persistence

- Toggle theme using a button or switch.
- Persist the theme in localStorage and apply on page load.
- Change background and text color based on the theme.

```js
  const localStorageValue = JSON.parse(localStorage.getItem("day-18-task-theme"));
  const moon = document.querySelector(".moon");
  const sun = document.querySelector(".sun");
  
  function initialThem() {
    if(localStorageValue === "dark") {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
      document.body.classList.add(localStorageValue);
      moon.classList.add("hide");
      sun.classList.remove("hide");
    } else {
      localStorage.setItem("day-18-task-theme", JSON.stringify(""));
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.body.classList.remove("dark");
      moon.classList.remove("hide");
      sun.classList.add("hide");
    }
  }
  initialThem();

  function darkTheme() {
    localStorage.setItem("day-18-task-theme", JSON.stringify("dark"));
    document.body.classList.add("dark");

    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
    moon.classList.add("hide");
    sun.classList.remove("hide");
  }

  function lightTheme() {
    localStorage.setItem("day-18-task-theme", JSON.stringify(null));
    document.body.classList.remove("dark");

    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    moon.classList.remove("hide");
    sun.classList.add("hide");
  }
```

![Rendered Image 1](./images/Day-18-Task-3-A.jpg)
![Rendered Image 2](./images/Day-18-Task-3-B.jpg)

![Day-18 All Tasks](./images/Day-18-Task-All.jpg)





Please find the task assignments in the [Task File](./task.js).