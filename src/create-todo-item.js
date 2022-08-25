const submitBtn = document.querySelector('.submit');
const todoArray = [];

export class TodoItem {
    constructor(title, priority, description, date) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.date = date;
    }

    addTodoArrayToDisplay() {
        const taskContainer = document.querySelector('.task-container');
        const title = document.createElement('div');
        taskContainer.appendChild(newTask);
    }
}

function createTodoItem() {
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

//submit btn
export function submit() {
    submitBtn.onclick = function(event) {
        event.preventDefault();
        createTodoItem();
    } 
}


// createTodoItem () {
//     let title = document.querySelector('#task-title').value;
//     let priority = document.querySelector
//     alert('test');
//     let newItem = new ToDoItem(title, priority, description, date);
// }

{/* <div class="task-item-title">Placeholder title</div>
    <div class="task-item-description">Placeholder description</div>
    <input type="date" value="2021-08-25" class="task-item-date">
    <p>Priority: </p>
        <label for="high">High</label>
        <input type="radio" id="high" name="priority" value="high">
        <label for="medium">Medium</label>
        <input type="radio" id="medium" name="priority" value="medium">
        <label for="low">Low</label>
        <input type="radio" id="low" name="priority" value="low"></input> */}