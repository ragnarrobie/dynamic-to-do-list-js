//retrieve to do from local storage
let todo= JSON.parse(localStorage.getItem("todo"))||[];
const todoInput= document.getElementById("todoInput");
const todoList=document.getElementById('todoList');
const todoCount=document.getElementById('todoCount');
const addbtn=document.querySelector('.btn');
const deletebtn=document.getElementById('delete btn');
//initialize
document.addEventListener("DOMContentLoaded",function(){
    addbtn.addEventListener("click",addTask)
    todoInput.addEventListener("keydown",(event)=>{
        if(event.key==="Enter"){
            event.preventDefault();
            addTask();
        };
    deletebtn.addEventListener('click',deleteTask
         //some logic
);
    displayTasks();
    })
});
function addTask(){
    const newTask=todoInput.value.trim();
    if (newTask !==""){
        todo.push({
             text:newTask,
             disable:false,
        })
        saveToLocalStorage();
        todoInput.value="";
        displayTasks();

    }

}
function displayTasks(){
    todoList.innerHTML="";
    todo.foreach((item,index)=>{
        const p= document.createElement("p");
        p.innerHTML=`
                        <div class="todo-container">
                        <input type="checkbox" class="todo-checkbox"id="input-${index} ${item.disabled ?"checked":"" }>
                        <p id="todo-${index}" class="${item.disbled ?"disabled":""}" 
                         onclick="editTask"(${index})> ${item.text}</p>
                        </div>
                    `;
        p.querySelector("todo-checkbox").addEventListener("change",()=>{
            toggleTask(index);
        });
        todoList.appendChild(p);
    });
}
function saveToLocalStorage(){
    localStorage.setItem("todo",JSON.stringify(todo));
}
function deleteTask(){
    console.log('test');
}