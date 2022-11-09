import { addTodoArrayToContent, displayNewItem } from './content-control';

const submitProject = document.getElementById('submit-project-btn');
export const projectItemContainer = document.querySelector('.project-item-container');
const projectInput = document.getElementById('project-input');
const contentHeading = document.querySelector('.content-heading');

export function addProject() {
  addProjectNameToSideBar();
}

function addProjectNameToSideBar() {
  submitProject.onclick = function () {
    const projectItem = document.createElement('p');
    projectItem.textContent = projectInput.value;
    projectItem.classList.add('project-item');
    projectItemContainer.appendChild(projectItem);

    changeToProject();
  };
}

export function changeToProject() {
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((project) => {
    project.onclick = function (e) {
      const projectName = e.target.textContent;
      contentHeading.textContent = projectName;
      contentHeading.setAttribute('data-project-name', contentHeading.textContent);
      displayNewItem();
      addTodoArrayToContent();
    };
  });
}
