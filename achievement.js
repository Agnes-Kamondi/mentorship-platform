function addAchievement() {
    var input = document.getElementById("new-achievement");
    var taskName = input.value;
    if (taskName === "") {
    alert("Please enter a achievement.");
    return;
    }
    input.value = "";
   
    var list = document.getElementById("Achievement-list");
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