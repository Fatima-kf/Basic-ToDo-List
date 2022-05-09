// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList =document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");

// eventListeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',checkRemove);
filterOption.addEventListener('click',filterTodos);

// functions
function addTodo(e){
e.preventDefault();
console.log(e);
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
// create todo item
const newTodo = `
<li class="todo-item">${todoInput.value}</li>
<span> <i class="far fa-check-square"></i></span>
<span><i class="far fa-trash-alt"></i></span>`;
todoDiv.innerHTML = newTodo;
  // append to todolist
  todoList.appendChild(todoDiv);
  // save todo in local ;
  
  // clear input :
  todoInput.value = "";
}
function checkRemove(e){
    const classList=[...e.target.classList];
    const item =e.target;
    //console.log(item.parentElement.parentElement);
    if (classList[1]==="fa-trash-alt"){
        const todo = item.parentElement.parentElement;
        todo.remove();
    }else if (classList[1] === "fa-check-square"){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodos(e){
    console.log(todoList.childNodes);
    const todos = [...todoList.childNodes];
    todos.forEach((todo)=>{
        
            switch(e.target.value){
                case"all":
                todo.style.display="flex";
                break;
                case"completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
                case"uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }break;
            }   
    });
        }
    
