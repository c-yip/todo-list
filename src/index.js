console.log('Testing index.js');
import { createTodoItem } from "./todo-item";
createTodoItem();

const modal = document.getElementById("task-modal");
const taskBtn = document.querySelectorAll("#add-task-btn");
const closeBtn = document.getElementsByClassName("close")[0];

taskBtn.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "block";
      }
})

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}