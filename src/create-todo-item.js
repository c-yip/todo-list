export const todoArray = [];
const projectArray = [];
let id = null;

export class TodoItem {
    constructor(title, priority, description, date, project) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.date = date;
        this.idNum = ++id;
        this.project = project;
    }
}

export function createTodoItem() {
    let title = document.querySelector('#task-title').value;
    let priority = document.querySelector('input[name="priority"]:checked').value;
    let description = document.querySelector('#task-description').value;
    let date = document.querySelector('#due-date').value;
    let heading = document.querySelector('.content-heading');
    let project = heading.dataset.projectName;
    let newItem = new TodoItem(title, priority, description, date, project);
    todoArray.push(newItem); 
    console.log(todoArray);
   
    if (newItem.project !== 'home') {
        projectArray.push(newItem);
    }
    console.log(projectArray);
}
