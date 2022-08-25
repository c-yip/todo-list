export class TodoItem {
    constructor() {
        this.title;
        this.priority;
        this.description;
        this.date;
    }

    createTodoItem() {
        const taskContainer = document.querySelector('.task-container');
        const newTask = document.createElement('li');
        taskContainer.appendChild(newTask);
    }
}
