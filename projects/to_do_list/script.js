const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAllBtn = document.getElementById("clearAll");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => addTaskToDOM(task.text, task.completed));
updateCount();

// Add Task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTaskToDOM(taskText);
    tasks.push({text: taskText, completed: false});
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    updateCount();
  }
});

// Add task to DOM
function addTaskToDOM(text, completed = false) {
  const li = document.createElement("li");
  li.textContent = text;
  if (completed) li.classList.add("completed");

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateTaskStorage();
    updateCount();
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggling complete
    taskList.removeChild(li);
    updateTaskStorage();
    updateCount();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// Update localStorage
function updateTaskStorage() {
  const items = taskList.querySelectorAll("li");
  tasks = [];
  items.forEach(item => {
    tasks.push({
      text: item.childNodes[0].nodeValue,
      completed: item.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear All
clearAllBtn.addEventListener("click", () => {
  tasks = [];
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
  updateCount();
});

// Update task count
function updateCount() {
  const remaining = tasks.filter(t => !t.completed).length;
  taskCount.textContent = `${remaining} task${remaining !== 1 ? "s" : ""} left`;
}
