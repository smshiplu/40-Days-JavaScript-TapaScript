# Project task assignment for the Day-18  

## Project - Todo List

```js
const taskInput =  document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchTask");
const headerElem = document.getElementById("header");

function addTask() {
  const task = taskInput.value.trim()
  if(!task) return;

  const liElem = document.createElement("li");
  liElem.innerText = task;

  //completed button
  const completedBtn = document.createElement("button");
  completedBtn.innerText = "✔";
  completedBtn.classList.add("btnCompleted");
  liElem.appendChild(completedBtn);
  completedBtn.onclick = () => {
    liElem.classList.toggle("completed");
  }

  //edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "🖍";
  editBtn.classList.add("btnEdit");
  liElem.appendChild(editBtn);
  editBtn.onclick = () => {
    taskInput.value = liElem.childNodes[0].textContent;
    transformAddTaskBtnToSaveTaskBtn();
    liElem.classList.add("save-task");
  }

  //delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.classList.add("btnDelete");
  liElem.appendChild(delBtn);
  delBtn.onclick = () => {
    if(!confirm("Are you sure to delete task?")) return;
    liElem.remove();
  }

  taskList.appendChild(liElem);
  taskInput.value = "";
}

function saveTask() {
  const saveBtn = document.querySelector(".saveBtn");
  const newValue = saveBtn.previousElementSibling.value;
  const saveBtnChildNodes = document.querySelector(".save-task").childNodes;
  saveBtnChildNodes[0].textContent = newValue;
  transformSaveTaskBtnToAddTaskBtn(saveBtn);
  document.querySelector(".save-task").classList.remove("save-task");
  saveBtn.previousElementSibling.value = "";
}

function searchTask() {
  const searchedTask = searchInput.value.trim();
  const taskListLi = document.querySelectorAll( "ul#taskList li");
  
  taskListLi.forEach(task => {
    const taskText = task.childNodes[0].data;
    console.log(taskText, searchedTask);
    task.style.display = taskText.toLowerCase().includes(searchedTask.toLowerCase()) ? "block" : "none";
  });
}

function transformAddTaskBtnToSaveTaskBtn() {
  taskInput.nextElementSibling.innerText = "Save Task";
  taskInput.nextElementSibling.classList.remove("addBtn");
  taskInput.nextElementSibling.classList.add("saveBtn");
  taskInput.nextElementSibling.removeAttribute("onclick")
  taskInput.nextElementSibling.setAttribute("onclick", "saveTask()");
}

function transformSaveTaskBtnToAddTaskBtn(elem) {
  elem.innerText = "Add Task"
  elem.classList.remove("saveBtn")
  elem.classList.add("addBtn");
  elem.removeAttribute("onclick")
  elem.setAttribute("onclick", "addTask()");
}

window.onscroll = () => {
  scrollY > 200 ?  headerElem.classList.add("sticky") : headerElem.classList.remove("sticky");
}
```