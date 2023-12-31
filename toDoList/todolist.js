const todoList = [ {
    name: 'make dinner', 
    dueDate: '06-09-2023'
}, {
    name: 'wash dishes',
    dueDate: '07-09-2023'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, indext) {
        const {name, dueDate} = todoObject
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${indext}, 1);
                renderTodoList();
            " class="delete-to-button">Delete</button>
            `;
        todoListHTML += html
    })

    document.querySelector('.js-todo-list').innerHTML = todoListHTML
}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dataInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dataInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}