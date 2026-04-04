let todoList = JSON.parse(localStorage.getItem('todoList')) || []; /*|| [
    {item:'Buy Milk', dueDate: '4/5/2023'}, 
    {item:'Go to College' , dueDate: '5/6/2023'}
];*/
displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    

    todoList.push({item: todoItem, dueDate: todoDate});

    inputElement.value = '';
    dateElement.value = '';

    saveAndDisplay();
}

//New code enter for local storage
function saveAndDisplay(){
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

function displayItems(){

    let containerElement = document.querySelector(' .todo-container');

    let newHtml = '';

    for(let i = 0; i < todoList.length; i++){
        //destructring
        let {item, dueDate} = todoList[i];

        newHtml +=`
                <div class="grid-container">
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class="btn-todo-delete" onclick="todoList.splice(${i}, 1)
                displayItems()">Delete</button>
                </div>
        `;
    }
    containerElement.innerHTML = newHtml;
}
