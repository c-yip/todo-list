export let todoArray = [];
import { createDom } from "./content-control";
const projectArray = [];
let id = null;
let firstLoad = true;

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
    firstLoad = false;
    console.log(firstLoad);

    // local storage
    localStorage.setItem('todoArrayStorage', JSON.stringify(todoArray));
    localStorage.setItem('idCount', JSON.stringify(id));
    localStorage.setItem('firstLoad', JSON.stringify(firstLoad));
}

export function loadLocalStorage() {
    let firstLoadInquiry = JSON.parse(localStorage.getItem('firstLoad'));
    firstLoad = firstLoadInquiry;
    console.log(firstLoad);

    if (firstLoad == false) {
        console.log('loading array');
        const userLocalData = JSON.parse(localStorage.getItem('todoArrayStorage'));
        todoArray = userLocalData;
        const idCount = JSON.parse(localStorage.getItem('idCount'));
        id = idCount;
    
        todoArray.forEach(item => {
            createDom(item);
        })
    } else {
        return;
    }
}


