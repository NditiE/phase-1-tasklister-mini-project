document.addEventListener("DOMContentLoaded", function() {

    const taskForm = document.getElementById ('creat-task-form');
    const taskList = document.getElementById ('task-list');
    const taskInput = document.getElementById ('new-task-description'); 

    taskForm.addEventListener ('submit',function(i){
      i.preventDefault();
    

    const taskDescription = taskInput.value.trim();
    const priority = document.getElementById('priority').value;

    if(taskDescription !==''){
      const taskItem = document.createElement('lt');
      taskItem.textContent = textDescription;
      taskItem.classList.add(priority);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.addEventListener('click',function(){
        taskList.removeChild(taskItem);
      });
      taskItem.appendChild (deleteButton);

      taskList.appendChild (taskItem);

      taskInput.value = '';
    };
    });
});
 