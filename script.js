document.addEventListener("DOMContentLoaded",()=>{
const addButton=document.getElementById('add-task-btn');
const taskInput=document.getElementById("task-input");
const taskList =document.getElementById("task-list");
function addTask(){
const taskTest= taskInput.ariaValueMax.trim();
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
};
addTask();






});
document.addEventListener("DOMContentLoaded",(event)=>{
    addTask();
})
