// script.js
function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText) {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" id="task${taskList.children.length + 1}">
        <label for="task${taskList.children.length + 1}">${taskText}</label>`;
      taskList.appendChild(li);
      document.getElementById('newTask').value = '';
    }
  }
  
  function sendMessage() {
    const message = document.getElementById('chat').value;
    if (message) {
      // Implement sending message logic (e.g., updating a chat window)
      console.log('Message sent:', message);
      document.getElementById('chat').value = '';
    }
  }