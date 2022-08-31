export let todoArray = [];
import { createDom } from "./content-control";
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
        this.checked = false;
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

    // local storage
    localStorage.setItem('todoArrayStorage', JSON.stringify(todoArray));
    localStorage.setItem('idCount', JSON.stringify(id));
}

export function loadLocalStorage() {
    const body = document.querySelector('body');
    body.onload = function() {
        console.log('testing on load');
        const userLocalData = JSON.parse(localStorage.getItem('todoArrayStorage'));
        todoArray = userLocalData;
        const idCount = JSON.parse(localStorage.getItem('idCount'));
        id = idCount;

        if (todoArray.length === 0) {
            return;
        } else {
            todoArray.forEach(item => {
                createDom(item);
            })
        }
    };
}


