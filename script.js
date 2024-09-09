document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("new-task-input");
    const taskDeadlineInput = document.getElementById("task-deadline");
    const taskList = document.getElementById("task-list");
    const addTaskBtn = document.getElementById("add-task-btn");
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const deadlineSwitch = document.getElementById("deadline-switch");

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let isDarkMode = JSON.parse(localStorage.getItem("isDarkMode")) || false;

    // Apply saved theme mode
    applyTheme();

    // Function to render the task list
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = task.completed ? "completed" : "";
            li.innerHTML = `
                <div class="task-details">
                    <span><strong>Task:</strong> ${task.text}</span>
                    <span><strong>Added on:</strong> ${task.addedDate}</span>
                    <span><strong>Deadline:</strong> ${task.deadline || 'No deadline'}</span>
                </div>
                <div>
                    <button onclick="deleteTask(${index})">Delete</button>
                    <button onclick="toggleTask(${index})">${task.completed ? "Undo" : "Complete"}</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        const taskDeadline = deadlineSwitch.checked ? taskDeadlineInput.value.trim() : null;
        if (taskText === "") return;

        const addedDate = new Date().toLocaleDateString(); // Current date

        tasks.push({
            text: taskText,
            addedDate: addedDate,
            deadline: taskDeadline, // Deadline if provided
            completed: false
        });

        taskInput.value = "";
        taskDeadlineInput.value = "";
        saveTasks();
        renderTasks();
    }

    // Function to delete a task
    window.deleteTask = function(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    // Function to toggle task completion
    window.toggleTask = function(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    };

    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to apply the theme based on local storage
    function applyTheme() {
        if (isDarkMode) {
            document.body.classList.add("dark");
            themeToggleBtn.textContent = "Switch to Light Mode";
        } else {
            document.body.classList.remove("dark");
            themeToggleBtn.textContent = "Switch to Dark Mode";
        }
    }

    // Event listener for theme toggle
    themeToggleBtn.addEventListener("click", function() {
        isDarkMode = !isDarkMode;
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
        applyTheme();
    });

    // Event listener for deadline switch
    deadlineSwitch.addEventListener("change", function() {
        if (deadlineSwitch.checked) {
            taskDeadlineInput.style.display = "block";
        } else {
            taskDeadlineInput.style.display = "none";
            taskDeadlineInput.value = ""; // Clear the deadline field if unchecked
        }
    });

    // Add task event listener
    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Initial render
    renderTasks();

    // Initially hide the deadline input if the switch is unchecked
    if (!deadlineSwitch.checked) {
        taskDeadlineInput.style.display = "none";
    }
});
