document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the default form submission
  
      // Get the task description from the input field
      const taskDescription = document.getElementById("new-task-description").value;
  
      // Create a new task item and append it to the task list
      if (taskDescription) {
        const taskItem = document.createElement("li");
        taskItem.innerText = taskDescription;
        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
          taskItem.remove(); // Delete task when the button is clicked
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
  
        // Clear the input field after adding the task
        document.getElementById("new-task-description").value = "";
      }
    });
  });
  