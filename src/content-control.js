import { todoArray, projectArray } from './create-todo-item';

function createPriorityLabel(priority, text) {
  const label = document.createElement('label');
  label.setAttribute('for', priority);
  label.textContent = text;
  return label;
}

function createPriorityInput(priority, id) {
  const input = document.createElement('input');
  input.setAttribute('id', priority);
  input.setAttribute('type', 'radio');
  input.setAttribute('name', id);
  input.setAttribute('value', priority);
  input.classList.add('radio-dom');
  return input;
}

export function createDom(item) {
  const taskContainer = document.querySelector('.task-container');
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('itemContainer');
  if (item.checked === true) {
    itemContainer.classList.add('item-checked');
  }
  itemContainer.setAttribute('data-id', item.idNum);
  taskContainer.appendChild(itemContainer);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('checkbox');
  itemContainer.appendChild(checkbox);
  const itemTitle = document.createElement('div');
  itemTitle.classList.add('task-item-title');
  itemTitle.textContent = item.title;
  itemContainer.appendChild(itemTitle);
  const description = document.createElement('div');
  description.classList.add('task-item-description');
  description.textContent = item.description;
  itemContainer.appendChild(description);
  const dateInput = document.createElement('input');
  dateInput.classList.add('task-item-date');
  dateInput.value = item.date;
  dateInput.setAttribute('type', 'date');
  itemContainer.appendChild(dateInput);
  itemContainer.appendChild(createPriorityLabel('high', 'High'));
  itemContainer.appendChild(createPriorityInput('high', item.idNum));
  itemContainer.appendChild(createPriorityLabel('medium', 'Medium'));
  itemContainer.appendChild(createPriorityInput('medium', item.idNum));
  itemContainer.appendChild(createPriorityLabel('low', 'Low'));
  itemContainer.appendChild(createPriorityInput('low', item.idNum));
  const priority = document.querySelectorAll('.radio-dom');
  priority.forEach((p) => {
    if (p.classList.contains('checked')) {
      return;
    } if (p.value === item.priority) {
      p.checked = true;
    }
    p.classList.add('checked');

    if (item.priority === 'high') {
      p.parentElement.classList.add('high');
    }

    if (item.priority === 'medium') {
      p.parentElement.classList.add('medium');
    }

    if (item.priority === 'low') {
      p.parentElement.classList.add('low');
    }
  });

  const trash = document.createElement('img');
  trash.setAttribute('src', 'images/trash.png');
  trash.setAttribute('alt', 'trash icon');
  trash.classList.add('trash');
  itemContainer.appendChild(trash);

  document.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') === 'high') {
      const parent = e.target.parentElement;
      parent.classList.remove('medium');
      parent.classList.remove('low');
      parent.classList.add('high');

      const dataId = parent.dataset.id;
      const selectedObject = todoArray.find((obj) => obj.idNum === dataId);
      selectedObject.priority = 'high';
    }

    if (e.target.getAttribute('id') === 'medium') {
      const parent = e.target.parentElement;
      parent.classList.remove('high');
      parent.classList.remove('low');
      parent.classList.add('medium');

      const dataId = parent.dataset.id;
      const selectedObject = todoArray.find((obj) => obj.idNum === dataId);
      selectedObject.priority = 'medium';
    }

    if (e.target.getAttribute('id') === 'low') {
      const parent = e.target.parentElement;
      parent.classList.remove('medium');
      parent.classList.remove('high');
      parent.classList.add('low');

      const dataId = parent.dataset.id;
      const selectedObject = todoArray.find((obj) => obj.idNum === dataId);
      selectedObject.priority = 'low';
    }
    localStorage.setItem('todoArrayStorage', JSON.stringify(todoArray));
  });

  document.addEventListener('change', (e) => {
    const selectedDate = e.target;
    if (selectedDate.classList.contains('task-item-date')) {
      const parent = selectedDate.parentElement;
      const dataId = parent.dataset.id;
      const selectedObject = todoArray.find((obj) => obj.idNum === dataId);
      selectedObject.date = selectedDate.value;
    }
    localStorage.setItem('todoArrayStorage', JSON.stringify(todoArray));
  });
}

function addProjectToContent() {
  const heading = document.querySelector('.content-heading');
  const projectNameFromHeading = heading.dataset.projectName;
  const projectFilter = todoArray.filter((obj) => obj.project === projectNameFromHeading);
  return projectFilter;
}

// creates dom
export function addTodoArrayToContent() {
  if (document.querySelector('.content-heading').dataset.projectName === 'home') {
    todoArray.forEach((item) => {
      createDom(item);
    });
  } else {
    addProjectToContent().forEach((item) => {
      createDom(item);
    });
  }
}

export function displayNewItem() {
  const itemContainer = document.querySelectorAll('.itemContainer');
  itemContainer.forEach((item) => {
    item.remove();
  });
}

// removes item from content
export function itemControl() {
  // remove item
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')) {
      const parent = e.target.parentElement;
      const selected = parent.dataset.id;
      const indexOfObject = todoArray.findIndex((object) => object.idNum === selected);
      todoArray.splice(indexOfObject, 1);
      console.log(todoArray);

      localStorage.setItem('todoArrayStorage', JSON.stringify(todoArray));

      // remove object from project array
      const indexOfProject = projectArray.findIndex((object) => object.idNum === selected);
      projectArray.splice(indexOfProject, 1);
      localStorage.setItem('projectStorage', JSON.stringify(projectArray));
      console.log(projectArray);

      displayNewItem();
      addTodoArrayToContent();
    }
  });

  // cross item
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkbox')) {
      if (e.target.checked) {
        const parent = e.target.parentElement;
        parent.classList.add('item-checked');
        const dataId = parent.dataset.id;
        const selectedObject = todoArray.find((obj) => obj.idNum === dataId);
        selectedObject.checked = true;
      } else {
        const parent = e.target.parentElement;
        parent.classList.add('item-checked');
        const dataId = parent.dataset.id;
        const selectedObject = todoArray.find((obj) => obj.idNum === dataId);
        parent.classList.remove('item-checked');
        selectedObject.checked = false;
      }
    }
  });
}

export function homeBtnEventListener() {
  todoArray.forEach((item) => {
    createDom(item);
  });
  document.querySelector('.content-heading').textContent = 'Home';
  document.querySelector('.content-heading').setAttribute('data-project-name', 'home');
}
