document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    const li = document.createElement('li');
    li.innerText = taskInput.value;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });
  
    li.appendChild(deleteBtn);
  

    taskList.appendChild(li);
  

    taskInput.value = '';
  });
  
  document.getElementById('task-list').addEventListener('click', function(e) {
    const listItem = e.target.closest('li');
    if (listItem) {
      listItem.classList.toggle('completed');
    }
  });
  