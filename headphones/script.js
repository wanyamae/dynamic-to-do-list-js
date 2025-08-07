// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the "Add Task" button
    const addButton = document.getElementById('add-task-btn');
    // Select the input field for entering tasks
    const taskInput = document.getElementById('task-input');
    // Select the unordered list that displays tasks
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();
        // Only add the task if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            
        } else {
            // Create a new list item for the task
            const li = document.createElement('li');
            li.textContent = taskText;
            // Create a remove button for the task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            // Add a class for styling the remove button "classList.add" "classList.add"
            removeBtn.classList.add('remove-btn');
            // Remove the task when the remove button is clicked
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };
            // Add the remove button to the list item
            li.appendChild(removeBtn);
            // Add the list item to the task list
            taskList.appendChild(li);
            // Clear the input field
            taskInput.value = '';
        }
    }

    // Add a click event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);
    // Add a keypress event listener to allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
