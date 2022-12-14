import { createDom } from './content-control';
import { projectItemContainer, changeToProject } from './project-control';

export let todoArray = [];

export let projectArray = [];
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
  const title = document.querySelector('#task-title').value;
  const priority = document.querySelector('input[name="priority"]:checked').value;
  const description = document.querySelector('#task-description').value;
  const date = document.querySelector('#due-date').value;
  const heading = document.querySelector('.content-heading');
  const project = heading.dataset.projectName;
  const newItem = new TodoItem(title, priority, description, date, project);
  todoArray.push(newItem);
  console.log(todoArray);

  if (newItem.project !== 'home') {
    projectArray.push(newItem);
  }
  console.log(projectArray);
  firstLoad = false;

  // local storage
  localStorage.setItem('todoArrayStorage', JSON.stringify(todoArray));
  localStorage.setItem('idCount', JSON.stringify(id));
  localStorage.setItem('firstLoad', JSON.stringify(firstLoad));
  localStorage.setItem('projectStorage', JSON.stringify(projectArray));
}

export function loadLocalStorage() {
  const firstLoadInquiry = JSON.parse(localStorage.getItem('firstLoad'));
  firstLoad = firstLoadInquiry;

  if (firstLoad == false) {
    console.log('loading array');
    const userLocalData = JSON.parse(localStorage.getItem('todoArrayStorage'));
    todoArray = userLocalData;
    const idCount = JSON.parse(localStorage.getItem('idCount'));
    id = idCount;
    const projectStorage = JSON.parse(localStorage.getItem('projectStorage'));
    projectArray = projectStorage;

    todoArray.forEach((item) => {
      createDom(item);
    });

    projectArray.forEach((item) => {
      const projectItem = document.createElement('p');
      projectItem.textContent = item.project;
      projectItem.classList.add('project-item');
      projectItemContainer.appendChild(projectItem);
    });

    changeToProject();
  } else {

  }
}
