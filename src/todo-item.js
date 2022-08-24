export function createTodoItem() {
    const taskContainer = document.querySelector('.task-container');
    const newTask = document.createElement('li');
    taskContainer.appendChild(newTask);
}