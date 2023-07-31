function addTask() {
	const taskInput = document.getElementById('taskInput');
	const taskDescription = taskInput.value.trim();

	if (taskDescription !== '') {
		const taskElement = document.createElement('div');
		taskElement.textContent = taskDescription;

		const todoContainer = document.getElementById('todo-container');
		todoContainer.appendChild(taskElement);

		taskInput.value = '';

		saveTasksToLocalStorage();
	}
}

function clearAllTasks() {
	const todoContainer = document.getElementById('todo-container');
	todoContainer.innerHTML = '';
	localStorage.removeItem('tasks');
}

const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		addTask();
	}
});

function removeTask(taskElement) {
	taskElement.remove();
	saveTasksToLocalStorage();
}

function completeTask(taskElement) {
	taskElement.style.textDecoration = 'line-through';
	saveTasksToLocalStorage();
}

function loadTasksFromLocalStorage() {
	const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	const todoContainer = document.getElementById('todo-container');

	tasks.forEach((taskDescription) => {
		const taskElement = document.createElement('div');
		taskElement.textContent = taskDescription;

		todoContainer.appendChild(taskElement);
	});
}

function saveTasksToLocalStorage() {
	const taskElements = document.querySelectorAll('#todo-container div');
	const tasks = [];

	taskElements.forEach((taskElement) => {
		tasks.push(taskElement.textContent);
	});

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.onload = loadTasksFromLocalStorage;
