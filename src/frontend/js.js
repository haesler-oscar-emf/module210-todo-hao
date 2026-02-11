$(document).ready(function() {
    $("#todo-form").submit(function(e) {
      e.preventDefault();
      const task = $("#todo-input").val();
      if (task.trim() === "") return;
      const li = $(`<li><input type="checkbox" class="task-toggle"> ${task} <button class="delete-btn">✖</button></li>`);
      
      li.hide().appendTo("#todo-list").fadeIn(300);
      $("#todo-input").val("");
  
      li.find(".delete-btn").click(function() {
        li.fadeOut(300, function() { li.remove(); });
      });
  
      li.find(".task-toggle").change(function() {
        li.toggleClass("completed");
      });
    });
  });
  