export const todoArray = [];
let id = null;

export class TodoItem {
    constructor(title, priority, description, date) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.date = date;
        this.idNum = ++id;
    }
}

export function createTodoItem() {
    let title = document.querySelector('#task-title').value;
    console.log(title);
    let priority = document.querySelector('input[name="priority"]:checked').value;
    console.log(priority);
    let description = document.querySelector('#task-description').value;
    console.log(description);
    let date = document.querySelector('#due-date').value;
    console.log(date);

    let newItem = new TodoItem(title, priority, description, date);
    console.log(newItem);
    todoArray.push(newItem); 
    console.log(todoArray);
}
