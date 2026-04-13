const API_BASE_URL = "https://0r00gr90e9.execute-api.us-east-1.amazonaws.com/dev";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const messageBox = document.getElementById("message");
const emptyState = document.getElementById("emptyState");
const taskCount = document.getElementById("taskCount");

function showMessage(text, type = "success") {
  messageBox.textContent = text;
  messageBox.className = `message ${type}`;
}

function clearMessage() {
  messageBox.textContent = "";
  messageBox.className = "message";
}

function updateTaskCount(count) {
  taskCount.textContent = `${count} item${count === 1 ? "" : "s"}`;
}

function renderTasks(tasks) {
  taskList.innerHTML = "";

  if (!tasks || tasks.length === 0) {
    emptyState.style.display = "block";
    updateTaskCount(0);
    return;
  }

  emptyState.style.display = "none";
  updateTaskCount(tasks.length);

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
      <div class="task-content">
        <p class="task-title">${escapeHtml(task.title || "Untitled task")}</p>
        <div class="task-meta">
          <span class="status-badge">${escapeHtml(task.status || "pending")}</span>
          <span>ID: ${escapeHtml(task.taskid || "")}</span>
        </div>
      </div>
      <button class="delete-btn" data-taskid="${task.taskid}">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadTasks() {
  clearMessage();

  try {
    const response = await fetch(`${API_BASE_URL}/tasks`);

    if (!response.ok) {
      throw new Error(`GET failed: ${response.status}`);
    }

    const tasks = await response.json();
    renderTasks(tasks);
    showMessage("Tasks loaded successfully.");
  } catch (error) {
    renderTasks([]);
    showMessage("Error loading tasks.", "error");
    console.error("Load error:", error);
  }
}

async function addTask() {
  const title = taskInput.value.trim();

  if (!title) {
    showMessage("Please enter a task title.", "error");
    taskInput.focus();
    return;
  }

  clearMessage();

  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });

    if (!response.ok) {
      throw new Error(`POST failed: ${response.status}`);
    }

    const data = await response.json();
    taskInput.value = "";
    showMessage(data.message || "Task created successfully.");
    await loadTasks();
  } catch (error) {
    showMessage("Error creating task.", "error");
    console.error("Create error:", error);
  }
}

async function deleteTask(taskId) {
  clearMessage();

  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(`DELETE failed: ${response.status}`);
    }

    const data = await response.json();
    showMessage(data.message || "Task deleted successfully.");
    await loadTasks();
  } catch (error) {
    showMessage("Error deleting task.", "error");
    console.error("Delete error:", error);
  }
}

addTaskBtn.addEventListener("click", addTask);
loadTasksBtn.addEventListener("click", loadTasks);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const taskId = event.target.getAttribute("data-taskid");
    deleteTask(taskId);
  }
});

loadTasks();
