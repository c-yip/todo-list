import { createTodoItem } from './create-todo-item';
import { addTodoArrayToContent, displayNewItem, homeBtnEventListener } from './content-control';
import { addProject } from './project-control';

export default function modalControl() {
  const modal = document.getElementById('task-modal');
  const taskBtn = document.querySelectorAll('#add-task-btn');
  const closeBtn = document.querySelectorAll('.close');
  const submitBtn = document.querySelector('.submit');
  const overlay = document.getElementById('overlay');
  const projectModal = document.getElementById('project-modal');
  const projectBtn = document.getElementById('add-project-btn');
  const submitProject = document.getElementById('submit-project-btn');
  const homeBtn = document.querySelector('#home-btn');

  function closeModal() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }

  function clearModal() {
    const taskTitle = document.querySelector('#task-title');
    taskTitle.value = '';
    const taskDescription = document.querySelector('#task-description');
    taskDescription.value = '';
    const date = document.querySelector('#due-date');
    date.value = '';
    closeModal(modal);
  }

  taskBtn.forEach((btn) => {
    btn.onclick = function () {
      modal.classList.add('active');
      overlay.classList.add('active');
    };
  });

  closeBtn.forEach((btn) => {
    btn.onclick = function () {
      const modal = btn.closest('.modal');
      closeModal(modal);
    };
  });

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  submitBtn.onclick = function () {
    displayNewItem();
    createTodoItem();
    addTodoArrayToContent();
    clearModal();
  };

  projectBtn.onclick = function () {
    projectModal.classList.add('active');
    overlay.classList.add('active');
  };

  submitProject.addEventListener('click', () => {
    addProject();
  });

  homeBtn.addEventListener('click', () => {
    displayNewItem();
    homeBtnEventListener();
  });
}
