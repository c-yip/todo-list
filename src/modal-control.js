import {createTodoItem} from "./create-todo-item";
import { addTodoArrayToContent } from "./content-control";
import { displayNewItem } from "./content-control";

export function modalControl() {
    const modal = document.getElementById('task-modal');
    const taskBtn = document.querySelectorAll('#add-task-btn');
    const closeBtn = document.getElementsByClassName('close')[0];
    const submitBtn = document.querySelector('.submit');

    function clearModal() {
        const taskTitle = document.querySelector('#task-title');
        taskTitle.value = '';
        const taskDescription = document.querySelector('#task-description');
        taskDescription.value = '';
        const date = document.querySelector('#due-date');
        date.value = '';
        modal.style.display = 'none';
    }

    taskBtn.forEach(btn => {
        btn.onclick = function() {
            modal.style.display = 'block';
        }
    })

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    submitBtn.onclick = function() {
        displayNewItem();
        createTodoItem();
        addTodoArrayToContent();
        clearModal();
    }
}
