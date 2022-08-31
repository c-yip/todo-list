import { todoArray } from "./create-todo-item";
// creates dom
export function addTodoArrayToContent() {
    if (document.querySelector('.content-heading').dataset.projectName == 'home') {
        todoArray.forEach(item => {
            createDom(item);
        })
        console.log('home')
    } else {
        addProjectToContent().forEach(item => {
            createDom(item);
        });
        console.log('project')
    }
}
function createDom(item) {
    const taskContainer = document.querySelector('.task-container');
        
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer');
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

    let priority = document.querySelectorAll('.radio-dom');
    priority.forEach(p => {
        if (p.classList.contains('checked')) {
            return;
        } else if (p.value == item.priority) {
            p.checked = true;
        }
        p.classList.add('checked');

        if (item.priority == 'high') {
            p.parentElement.classList.add('high');
        }

        if (item.priority == 'medium') {
            p.parentElement.classList.add('medium');
        }

        if (item.priority == 'low') {
            p.parentElement.classList.add('low');
        }
    })

    const trash = document.createElement('img');
    trash.setAttribute('src', 'images/trash.png');
    trash.setAttribute('alt', 'trash icon');
    trash.classList.add('trash');
    itemContainer.appendChild(trash);

    document.addEventListener('click', e => {
        if (e.target.getAttribute('id') == 'high') {
            let parent = e.target.parentElement;
            parent.classList.remove('medium');
            parent.classList.remove('low');
            parent.classList.add('high');

            let dataId = parent.dataset.id;
            let selectedObject = todoArray.find(obj => {
                return obj.idNum == dataId;
            });
            selectedObject.priority = 'high';
            console.log(selectedObject);
        }

        if (e.target.getAttribute('id') == 'medium') {
            let parent = e.target.parentElement;
            parent.classList.remove('high');
            parent.classList.remove('low');
            parent.classList.add('medium');
        }

        if (e.target.getAttribute('id') == 'low') {
            let parent = e.target.parentElement;
            parent.classList.remove('medium');
            parent.classList.remove('high');
            parent.classList.add('low');
        }
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
    let heading = document.querySelector('.content-heading');
    let projectNameFromHeading = heading.dataset.projectName;
    console.log(projectNameFromHeading);
    const projectArray = todoArray.filter(obj => {
        return obj.project == projectNameFromHeading;
    });
    return projectArray;
}

export function homeBtnEventListener() {
    todoArray.forEach(item => {
        createDom(item);
    })
    document.querySelector('.content-heading').textContent = 'Home';
    console.log('You are home.');
} 
