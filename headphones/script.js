document.addEventListener('DOMContentLoaded', function() {
    //select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //Function to add a new task to the list
    function addTask() {

        //Retrieve and trim the input value
        const taskText = taskInput.value.trim();


        //check if input is empty

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task

        const removeButton = document.createElement('remove');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assign an event to remove the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remive buttin to the list item
        li.appendChild(removBtn);

        // clear the input field

        taskInput.value = '';
    }


    // Add event listener to the Add Task button

    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for Enter kry

    taskInput.addEventListener('keypresss', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded
    addTask();
});