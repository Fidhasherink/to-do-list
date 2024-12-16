
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }
  
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteButton.onclick = () => taskItem.remove();
  
      taskItem.appendChild(deleteButton);
  

      taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
      });
  
      taskList.appendChild(taskItem);
      taskInput.value = ""; 
    };
  

    addTaskButton.addEventListener("click", addTask);
  

    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
  