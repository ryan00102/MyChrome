//To-do list 입력 및 출력 기능

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = []; //todo 저장하는 배열

function todoSave(){ //todo localstorage에 저장(string)
    localStorage.setItem("todos",JSON.stringify(todos));
}

function todoDelete(event){ //todo 삭제하기
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    todos = todos.filter((todo) => todo.id != parseInt(deleteLi.id));
    todoSave();
}

function todoPaint(newTodoObj){ //리스트에 todo 삽입하기
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",todoDelete);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li); 
}

function todoSubmit(event){ //input 폼에서 엔터 눌렀을 때 기능
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    todos.push(newTodoObj);
    todoPaint(newTodoObj);
    todoSave();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem("todos");
if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(todoPaint);
}