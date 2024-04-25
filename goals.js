function addGoal() {
    var input = document.getElementById("new-goal");
    var taskName = input.value;
    if (taskName === "") {
    alert("Please enter a goal.");
    return;
    }
    input.value = "";
   
    var list = document.getElementById("goal-list");
    var li = document.createElement("li");
    li.textContent = taskName;
   
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
    list.removeChild(li);
    };
   
    li.appendChild(deleteButton);
    list.appendChild(li);
    }