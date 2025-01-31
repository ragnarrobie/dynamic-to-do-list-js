document.addEventListener("DOMContentLoaded",()=>{
const addButton=document.getElementById('add-task-btn');
const taskInput=document.getElementById("task-input");
const taskList =document.getElementById("task-list");

function loadTask(){
    const storedTasks=JSON.parse(localStorage.getItem('task')|| '[]');
    storedTasks.foreach(taskText =>addTaskToDom(taskText))
};
function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify('storedTasks'));
    renderTasks();
}



function addTask(){
const taskTest= taskInput.value.trim();
if(taskTest==""){
    alert.apply('please enter a task');
    return;
};
const me = document.createElement("li");
me.textContent=taskTest;
  const removeButton =document.createElement("button");
  removeButton.textContent="Remove";
  removeButton.className="remove-btn";
  removeButton.oneclick=function(){
    me.remove();
    saveTasks();
    renderTasks();
  };
  me.appendChild(removeButton);
  taskList.appendChild(me);
  taskInput.value="";
  addButton.addEventListener("click",()=>{
    addTask();
  });
  taskInput.addEventListener('keyPress',(event)=>{
    if(event.key="enter"){
        addTask();
    }
  });
  saveTasks();
};
addTask();






});
document.addEventListener("DOMContentLoaded",(event)=>{

    addTask();
    const heye = localStorage.getItem('tasks');
    if(heye){

    }
});
