const submitProject = document.getElementById('submit-project-btn');
const projectItemContainer = document.querySelector('.project-item-container');
const projectInput = document.getElementById('project-input');

export function addProject() {
    addProjectNameToSideBar();
}

function addProjectNameToSideBar() {
    submitProject.onclick = function() {
        const projectItem = document.createElement('p');
        projectItem.textContent = projectInput.value;
        projectItemContainer.appendChild(projectItem);
    }
}