// Drag and Drop functionality (simplified example)
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
});

dropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    event.target.appendChild(document.getElementById(data));
});
