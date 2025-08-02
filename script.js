const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

function createNote(text, timestamp = new Date()) {
  const note = document.createElement("div");
  note.className = "note";

  const noteText = document.createElement("div");
  noteText.className = "note-text";
  noteText.innerText = text;

  const time = document.createElement("div");
  time.className = "timestamp";
  time.innerText = `Created at: ${timestamp.toLocaleString()}`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.innerHTML = `<i class="fas fa-edit"></i> Edit`;
  editBtn.onclick = () => {
    noteInput.value = text;
    notesContainer.removeChild(note);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i> Delete`;
  deleteBtn.onclick = () => notesContainer.removeChild(note);

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  note.appendChild(noteText);
  note.appendChild(time);
  note.appendChild(actions);

  notesContainer.appendChild(note);
}

addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText) {
    createNote(noteText);
    noteInput.value = "";
  }
});
