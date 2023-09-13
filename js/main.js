let taskInput = document.getElementById("inputTask");
let button = document.getElementById("submit");
let showTask = document.getElementsByClassName("alltasks");


let AllTasks = [];

let renderTask = () => {
  let newTask = {
    taskInput: taskInput.value,
  };
  AllTasks.push(newTask);
  
  
  showAllTasks();


  if(taskInput.value==""){
    alert("Please write your task");
  }
};


let deleteTask = (i) => {
  AllTasks.splice(i,1);
   showAllTasks();
}


let editTask = (i) => {
  inputTask= document.querySelectorAll(".alltasks input");
editbtn=document.querySelectorAll(".edit");
inputTask[i].removeAttribute("readonly" , "readonly");
editbtn[i].innerHTML="<button class=update>update</button>"


editbtn[i].setAttribute("onclick", `updateTask(${i})`);

}


let updateTask = (i) => {
  inputTask= document.querySelectorAll(".alltasks input");
  editbtn=document.querySelectorAll(".edit");
  inputTask[i].setAttribute("readonly" , "readonly");
  editbtn[i].innerHTML="<button class=edit>edit</button>";
 
  editbtn[i].setAttribute("onclick", `editTask(${i})`);
  AllTasks[i].task=inputTask[i].value;
}










let showAllTasks = () => {
  showTask[0].innerHTML = " ";
  AllTasks.forEach((element, index) => {
    showTask[0].innerHTML += `  
        <div>
        
            <input type="text" readonly  value="${element.taskInput}" >
        
            <div class="edit update " onclick= "editTask (${index})">
                <button>edit</button>
            </div>
            <div class="delete" onclick= "deleteTask (${index})">
                <button>delete</button>
            </div>
        
        </div>`;
  });
};



button.addEventListener('click', renderTask);


