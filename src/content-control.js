import { todoArray } from "./create-todo-item";
import { addProject } from "./project-control";
const contentHeading = document.querySelector('.content-heading');

// creates dom
export function addTodoArrayToContent() {
    todoArray.forEach(item => {
        const taskContainer = document.querySelector('.task-container');
        
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        itemContainer.setAttribute('id', `container-${item.idNum}`);
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

        let priority = document.querySelectorAll('.radio-dom');
        priority.forEach(p => {
            if (p.classList.contains('checked')) {
                return;
            } else if (p.value == item.priority) {
                p.checked = true;
            }
            p.classList.add('checked');
        })

        const trash = document.createElement('img');
        trash.setAttribute('src', 'images/trash.png');
        trash.setAttribute('alt', 'trash icon');
        trash.classList.add('trash');
        itemContainer.appendChild(trash);
    })
}

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

export function displayNewItem() {
    let itemContainer = document.querySelectorAll('.itemContainer');
    itemContainer.forEach(itemContainer => {
      itemContainer.remove();
    })
}

// removes item from content
export function itemControl() {
    // remove item
    document.addEventListener('click', e => {
        if (e.target.classList.contains('trash')) {
            let selected = e.target.dataset.id;
            console.log(selected);
            const indexOfObject = todoArray.findIndex(object => {
            return object.idNum == `${selected}`;
            });
            console.log(indexOfObject);
            todoArray.splice(indexOfObject, 1);
            console.log(todoArray);
            displayNewItem();
            addTodoArrayToContent();
        }
    })

    // cross item
    document.addEventListener('click', e => {
        if (e.target.classList.contains('checkbox')) {
            if (e.target.checked) {
                e.target.parentElement.classList.add('item-checked');
            } else {
                e.target.parentElement.classList.remove('item-checked');
            }
        }
    })
}

function addProjectToContent() {
    if (contentHeading.contains('data-project-name')) {
        todoArray.forEach(item => { 
            
        })
    } else return;
}