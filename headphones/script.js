document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Only add a task if input is not empty
        if (taskText !== "") {
            // Create a new list item for the task
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button for the task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';

            // Assign an event to remove the task when the button is clicked
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the remove button to the list item
            li.appendChild(removeBtn);

            // Append the list item to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        } else {
            alert("Please enter a task.");
            return;
        }
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {