

let textNewNote = document.getElementById('text').value;
let note = document.querySelector(".notes-container");


function saveNote () {
    note === text;

}

function createNote(note) {
    return`<div><input type="text""/><label>${note}</label></div>`;
 }
 

 addNewNote.addEventListener("click", () => {
    let textNewNote = document.getElementById('text');

    if(!textNewNote.value) return;
    let newNote = createNote(textNewNote.value);
    note.innerHTML = note.innerHTML + newNote;
    textNewNote.value = "";
  });
    




//на примере todolist
const addInputBtn = document.getElementById("add-task");
const tasksContainer = document.querySelector(".tasks-container");

function finishTask(element){
  const label = element.nextSibling;
  label.style.setProperty("text-decoration-line", "line-through");
}

function createTaskAsString(task) {
   return`<div><input type="checkbox" onchange="finishTask(this)"/><label>${task}</label></div>`;
}

addInputBtn.addEventListener("click", () => {
  const taskInputField = document.getElementById("task");

  if(!taskInputField.value) return;
  const newTaskAsString = createTaskAsString(taskInputField.value);
  tasksContainer.innerHTML = tasksContainer.innerHTML + newTaskAsString;
  taskInputField.value = "";
});
  

