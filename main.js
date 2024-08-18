const addButton = document.querySelector('.button');
const tasksList = document.querySelector('.tasks');
let taskId = 0;

addButton.onclick = function(event) {
    event.preventDefault();

    const taskText = document.querySelector('input').value;
    if (taskText === '') return;

    taskId++;
    const newTaskHTML = `
        <li>
            <input type="checkbox" id="task-${taskId}">
            <label for="task-${taskId}">${taskText}</label>
        </li>
    `;

    tasksList.innerHTML += newTaskHTML;

    document.querySelector('input').value = '';
}

tasksList.addEventListener('change', function(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const label = event.target.nextElementSibling;
        if (event.target.checked) {
            label.classList.add('delete');
        } else {
            label.classList.remove('delete');
        }
    }
});