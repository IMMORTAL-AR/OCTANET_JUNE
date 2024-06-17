// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;
    
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;
    
    // Adding delete button
    var deleteButton = document.createElement("span");
    deleteButton.textContent = " \u00D7";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
      li.remove();
    };
    
    li.appendChild(deleteButton);
    ul.appendChild(li);
    
    // Clear input
    input.value = "";
  }
  