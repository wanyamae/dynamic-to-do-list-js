// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button
    const addButton = document.getElementById('add-task-btn');
    // Select the input field for entering tasks
    const taskInput = document.getElementById('task-input');
    // Select the unordered list that displays tasks
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage and render them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a new task to the list
    function addTask(taskText, save = true) {
        // If called from button/input, get value from input
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;
        // Create a remove button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn');
        // Remove the task when the remove button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            // Remove from tasks array and update Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const idx = storedTasks.indexOf(taskText);
            if (idx > -1) {
                storedTasks.splice(idx, 1);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        };
        // Add the remove button to the list item
        li.appendChild(removeBtn);
        // Add the list item to the task list
        taskList.appendChild(li);
        // Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
        // Clear the input field if added via input
        if (save) {
            taskInput.value = '';
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', function() {
        addTask();
    });
    // Add a keypress event listener to allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks on page load loadTasks
    loadTasks();
});