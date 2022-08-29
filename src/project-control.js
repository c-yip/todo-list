export function projectBtn() {
    const modal = document.getElementById('project-modal');
    const projectBtn = document.getElementById('project-btn');
    projectBtn.onclick = function() {
        modal.style.display = 'block';
    }
}