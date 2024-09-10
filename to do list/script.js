// Load tasks and display current date when the page loads
window.onload = function () {
    displayCurrentDate();
    loadTasks();
  
    // Add event listener for "Enter" key press in the input field
    document.getElementById('taskInput').addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        addTask(); // Call the addTask function when Enter is pressed
      }
    });
  };
  
  // Function to display the current date
  function displayCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    const today = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
  
    dateElement.textContent = formattedDate;
  }
  
  // Function to add a new task
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
  
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }
  
    const tasks = getTasksFromLocalStorage();
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    renderTasks();
    taskInput.value = ''; // Clear the input
  }
  
  // Function to remove a task
  function removeTask(button) {
    const tasks = getTasksFromLocalStorage();
    const taskItem = button.parentElement;
    const taskIndex = Array.from(taskItem.parentElement.children).indexOf(taskItem);
  
    tasks.splice(taskIndex, 1); // Remove the task from array
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    renderTasks();
  }
  
  // Function to mark a task as completed
  function markCompleted(checkbox) {
    const tasks = getTasksFromLocalStorage();
    const taskItem = checkbox.parentElement;
    const taskIndex = Array.from(taskItem.parentElement.children).indexOf(taskItem);
  
    tasks[taskIndex].completed = checkbox.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    renderTasks();
  }
  
  // Function to get tasks from localStorage
  function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }
  
  // Function to render tasks to the DOM
  function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the current task list
  
    const tasks = getTasksFromLocalStorage();
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="markCompleted(this)">
        <span>${task.text}</span>
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
      `;
      if (task.completed) {
        li.classList.add('completed');
      }
      taskList.appendChild(li);
    });
  }
  
  // Function to load tasks when the page is opened
  function loadTasks() {
    renderTasks();
  }
  