const submitProject = document.getElementById('submit-project-btn');
const projectItemContainer = document.querySelector('.project-item-container');
const projectInput = document.getElementById('project-input');
const contentHeading = document.querySelector('.content-heading');

export function addProject() {
    addProjectNameToSideBar();
}

function addProjectNameToSideBar() {
    submitProject.onclick = function() {
        const projectItem = document.createElement('p');
        projectItem.textContent = projectInput.value;
        projectItem.classList.add('project-item');
        projectItemContainer.appendChild(projectItem);

        changeToProject();
    }
}

function changeToProject() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(project => {
        project.onclick = function(e) {
            contentHeading.textContent = e.target.textContent;
            contentHeading.setAttribute('data-project-name', contentHeading.textContent);
        }
    })
}

function createProjectLibrary() {

}